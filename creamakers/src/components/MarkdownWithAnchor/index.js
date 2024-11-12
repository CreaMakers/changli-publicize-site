import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Typography, Divider } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

const MarkdownWithAnchors = ({ markdown }) => {
    return (
        <ReactMarkdown
            children={markdown}
            remarkPlugins={[remarkGfm]}
            components={{
                h1: ({ node, ...props }) => (
                    <Title level={1} id={props.children}>
                        {props.children}
                    </Title>
                ),
                h2: ({ node, ...props }) => (
                    <Title level={2} id={props.children}>
                        {props.children}
                    </Title>
                ),
                h3: ({ node, ...props }) => (
                    <Title level={3} id={props.children}>
                        {props.children}
                    </Title>
                ),
                h4: ({ node, ...props }) => <Title level={4} {...props} />,
                p: ({ node, ...props }) => <Paragraph {...props} />,

                strong: ({ node, ...props }) => <Text strong {...props} />,
                em: ({ node, ...props }) => <Text italic {...props} />,

                ul: ({ node, ...props }) => <ul style={{ paddingLeft: "20px" }} {...props} />,
                ol: ({ node, ...props }) => <ol style={{ paddingLeft: "20px" }} {...props} />,

                li: ({ node, ...props }) => <li {...props} />,

                code: ({ inline, ...props }) =>
                    inline ? (
                        <Text code {...props} />
                    ) : (
                        <pre style={{ backgroundColor: "#f6f8fa", padding: "10px", borderRadius: "4px" }}>
                            <code {...props} />
                        </pre>
                    ),

                blockquote: ({ node, ...props }) => <blockquote style={{ borderLeft: "4px solid #ccc", paddingLeft: "10px", color: "#666" }} {...props} />,

                hr: () => <Divider />,

                a: ({ node, ...props }) => <Link {...props} />,
            }}
        />
    );
};

export default MarkdownWithAnchors;
