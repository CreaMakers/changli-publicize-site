"use client";

import { LogoCircle, Markdown, MarkdownAnchor } from "@/components";
import { ToTopOutlined } from "@ant-design/icons";
import { Col, FloatButton, Row } from "antd";
import { useEffect, useState } from "react";

const avatars = [
  "/assets/members/avatars/325.webp",
  "/assets/members/avatars/浮尘.webp",
  "/assets/members/avatars/何某.webp",
  "/assets/members/avatars/魏子青.webp",
  "/assets/members/avatars/下雨.webp",
  "/assets/members/avatars/樱之丽.webp",
  "/assets/members/avatars/Alrgin.webp",
  "/assets/members/avatars/Dcelysia.webp",
  "/assets/members/avatars/Hayaizo.webp",
  "/assets/members/avatars/isryds.webp",
  "/assets/members/avatars/liaoliao.webp",
  "/assets/members/avatars/lllccc.webp",
  "/assets/members/avatars/Medivh.webp",
  "/assets/members/avatars/melt..webp",
  "/assets/members/avatars/yuxialuozi.webp",
  "/assets/members/avatars/Zhe_Learn.webp",
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
