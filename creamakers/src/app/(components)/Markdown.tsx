"use client";

import ReactMarkdown, { Components } from "react-markdown";
import { Typography, Divider } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

const components: Components = {
  h1: ({ ...props }) => <Title id={props.children?.toString()} level={2} {...props} />,
  h2: ({ ...props }) => <Title id={props.children?.toString()} level={3} {...props} />,
  h3: ({ ...props }) => <Title id={props.children?.toString()} level={4} {...props} />,
  h4: ({ ...props }) => <Title id={props.children?.toString()} level={5} {...props} />,
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

export function Markdown({ markdown }: { markdown: string }) {
  return <ReactMarkdown components={components}>{markdown}</ReactMarkdown>;
}
