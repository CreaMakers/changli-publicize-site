import { useEffect, useState } from "react";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { Col, Row } from "antd";
import sourceMarkdown from "../../assets/markdown/project.md";

import SidePanel from "../../components/SidePanel";
import MarkdownWithAnchors from "../../components/MarkdownWithAnchor";

const extractHeadings = (markdownText) => {
    const headings = [];
    const processor = unified().use(remarkParse).use(remarkGfm);

    processor.parse(markdownText).children.forEach((node) => {
        if (node.type === "heading" && node.depth <= 3) {
            const text = node.children.map((child) => child.value).join("");
            headings.push({ text, depth: node.depth });
        }
    });
    return headings;
};

const Project = () => {
    const [markdown, setMarkdown] = useState("");
    const [headings, setHeadings] = useState([]);

    useEffect(() => {
        fetch(sourceMarkdown)
            .then((response) => response.text())
            .then((text) => {
                setMarkdown(text);
                setHeadings(extractHeadings(text));
            });
    }, []);

    return (
        <div>
            <Row>
                <Col span={20}>
                    <MarkdownWithAnchors markdown={markdown} />
                </Col>
                <Col span={4}></Col>
            </Row>
            
            <SidePanel headings={headings} />
        </div>
    );
};

export default Project;
