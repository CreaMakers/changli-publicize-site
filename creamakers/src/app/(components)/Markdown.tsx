"use client";

import ReactMarkdown, { Components } from "react-markdown";
import { Typography, Divider } from "antd";
import { useEffect, useState } from "react";

const { Title, Paragraph, Text, Link } = Typography;

const components: Components = {
  h1: ({ ...props }) => <Title level={2} {...props} />,
  h2: ({ ...props }) => <Title level={3} {...props} />,
  h3: ({ ...props }) => <Title level={4} {...props} />,
  h4: ({ ...props }) => <Title level={5} {...props} />,
  p: ({ ...props }) => <Paragraph {...props} />,

  strong: ({ ...props }) => <Text strong {...props} />,
  em: ({ ...props }) => <Text italic {...props} />,

  ul: ({ ...props }) => <ul style={{ paddingLeft: "20px" }} {...props} />,
  ol: ({ ...props }) => <ol style={{ paddingLeft: "20px" }} {...props} />,

  li: ({ ...props }) => <li {...props} />,

  code: ({ ...props }) => <Text code {...props} />,

  blockquote: ({ ...props }) => <blockquote style={{ borderLeft: "4px solid #ccc", paddingLeft: "10px", color: "#666" }} {...props} />,

  hr: () => <Divider />,

  a: ({ ...props }) => <Link href={props.href} />,
};

export function Markdown({ name }: { name: string }) {
  const [markdown, setMarkdown] = useState<string>("");

  useEffect(() => {
    fetch(`/raw/${name}/index.md`)
      .then((response) => {
        if (!response.ok) {
          return `Error: ${response.status}`;
        }
        return response.text();
      })
      .then((text) => {
        setMarkdown(text);
      });
  }, [name]);

  return <ReactMarkdown components={components}>{markdown}</ReactMarkdown>;
}
