"use client";

import { Anchor } from "antd";
import { AnchorLinkItemProps } from "antd/es/anchor/Anchor";
import { useEffect, useMemo } from "react";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";

type Heading = {
  text: string;
  depth: number;
};

const extractHeadings = (markdownText: string) => {
  const headings: Heading[] = [];
  const processor = unified().use(remarkParse).use(remarkGfm);

  processor.parse(markdownText).children.forEach((node) => {
    if (node.type === "heading") {
      // @ts-expect-error value is not defined in type definition
      const text = node.children.map((child) => child.value).join("");
      headings.push({
        text,
        depth: node.depth,
      });
    }
  });

  return headings;
};

const buildAnchorItems = (headings: Heading[]): AnchorLinkItemProps[] => {
  const items: AnchorLinkItemProps[] = [];
  const stack: AnchorLinkItemProps[] = [];

  headings.forEach((heading) => {
    const anchorItem: AnchorLinkItemProps = {
      key: heading.text,
      href: `#${heading.text}`,
      title: heading.text,
    };

    if (heading.depth === 1) {
      items.push(anchorItem);
      stack.length = 0;
      stack.push(anchorItem);
    } else {
      while (stack.length > heading.depth - 1) {
        stack.pop();
      }

      if (stack.length > 0) {
        const parent = stack[stack.length - 1];
        if (!parent.children) {
          parent.children = [];
        }
        parent.children.push(anchorItem);
      }

      stack.push(anchorItem);
    }
  });

  return items;
};

export function MarkdownAnchor({ name }: { name: string }) {
  const items: AnchorLinkItemProps[] = useMemo(() => [], []);

  useEffect(() => {
    fetch(`/raw/${name}/index.md`)
      .then((res) => res.text())
      .then((markdownText) => {
        const headings = extractHeadings(markdownText);
        const anchorItems = buildAnchorItems(headings);
        
        items.splice(0, items.length, ...anchorItems);
      });
  }, [name, items]);

  return <Anchor items={items} />;
}
