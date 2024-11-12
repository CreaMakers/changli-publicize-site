import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownWithAnchors = ({ markdown }) => {
  return (
    <ReactMarkdown
      children={markdown}
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => <h1 id={props.children}>{props.children}</h1>,
        h2: ({ node, ...props }) => <h2 id={props.children}>{props.children}</h2>,
        h3: ({ node, ...props }) => <h3 id={props.children}>{props.children}</h3>,
      }}
    />
  );
};

export default MarkdownWithAnchors;
