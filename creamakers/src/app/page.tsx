"use client";

import { LogoCircle, Markdown, MarkdownAnchor } from "@/components";
import { ToTopOutlined } from "@ant-design/icons";
import { Col, FloatButton, Row } from "antd";
import { useEffect, useState } from "react";

const avatars = [
  "/assets/members/avatars/325.jpg",
  "/assets/members/avatars/浮尘.jpg",
  "/assets/members/avatars/何某.jpg",
  "/assets/members/avatars/魏子青.webp",
  "/assets/members/avatars/下雨.jpg",
  "/assets/members/avatars/樱之丽.jpg",
  "/assets/members/avatars/Alrgin.jpg",
  "/assets/members/avatars/Dcelysia.png",
  "/assets/members/avatars/Hayaizo.jpg",
  "/assets/members/avatars/isryds.jpg",
  "/assets/members/avatars/liaoliao.jpeg",
  "/assets/members/avatars/lllccc.jpg",
  "/assets/members/avatars/Medivh.jpg",
  "/assets/members/avatars/melt..jpg",
  "/assets/members/avatars/yuxialuozi.jpg",
  "/assets/members/avatars/Zhe_Learn.png",
];

const logo = "/assets/team-logo.png";

export default function Home() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(`/raw/home/index.md`)
      .then((response) => {
        if (!response.ok) {
          return `Error: ${response.status}`;
        }
        return response.text();
      })
      .then((markdownText) => {
        setMarkdown(markdownText);
      });
  }, []);

  return (
    <Row>
      <Col span={18}>
        <LogoCircle logo={logo} avatars={avatars} />
        <Markdown markdown={markdown} />

        <FloatButton
          icon={<ToTopOutlined />}
          type="primary"
          onClick={() => {
            scrollTo(0, 0);
          }}
        />
      </Col>
      <Col span={6}>
        <div className="p-7">
          <MarkdownAnchor markdown={markdown} />
        </div>
      </Col>
    </Row>
  );
}
