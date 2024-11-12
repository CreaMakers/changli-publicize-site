import LogoCircle from "../../components/LogoCircle";
import SidePanel from "../../components/SidePanel";
import MarkdownWithAnchors from "../../components/MarkdownWithAnchor";
import { useEffect, useState } from "react";
import sourceMarkdown from "../../assets/markdown/home.md";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { Col, Row } from "antd";

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

const Home = () => {
    const [markdown, setMarkdown] = useState("");
    const [headings, setHeadings] = useState([]);

    const logo = require("../../assets/teamlogo.png");
    const avatars = [
        require("../../assets/team-people/325.jpg"),
        require("../../assets/team-people/AlrginCypress.jpg"),
        require("../../assets/team-people/Dcelysiz.png"),
        require("../../assets/team-people/Hayaizo.jpg"),
        require("../../assets/team-people/isryds.jpg"),
        require("../../assets/team-people/MedivhTirisfal.jpg"),
        require("../../assets/team-people/Sakuranori.jpg"),
        require("../../assets/team-people/Sylvia.jpg"),
        require("../../assets/team-people/Xiayu.jpg"),
        require("../../assets/team-people/yuxialuozi.png"),
    ];

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
                    <LogoCircle logo={logo} avatars={avatars} />
                    <MarkdownWithAnchors markdown={markdown} />
                </Col>
                <Col span={4}></Col>
            </Row>

            <SidePanel headings={headings} />
        </div>
    );
};

export default Home;
