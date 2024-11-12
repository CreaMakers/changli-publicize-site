import { useEffect, useState } from "react";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";
import sourceMarkdown from "../../assets/markdown/test.md";

import SidePanel from "../../components/SidePanel";
import MarkdownWithAnchors from "../../components/MarkdownWithAnchor";

const extractHeadings = (markdownText) => {
  const headings = [];
  const processor = unified().use(remarkParse).use(remarkGfm);

  processor.parse(markdownText).children.forEach(node => {
    if (node.type === "heading" && node.depth <= 3) {
      const text = node.children.map(child => child.value).join("");
      headings.push({ text, depth: node.depth });
    }
  });
  return headings;
};

const Information = () => {
  const [markdown, setMarkdown] = useState("");
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    fetch(sourceMarkdown)
      .then(response => response.text())
      .then(text => {
        setMarkdown(text);
        setHeadings(extractHeadings(text));
      });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <SidePanel headings={headings} />
      <div>
        <MarkdownWithAnchors markdown={markdown} />
      </div>
    </div>
  );
};

export default Information;
