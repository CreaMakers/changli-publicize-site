"use client";

import { LogoCircle, Markdown, MarkdownAnchor } from "@/components";
import { ToTopOutlined } from "@ant-design/icons";
import { Col, FloatButton, Row } from "antd";
import { useEffect, useState } from "react";

const avatars = [
  "/assets/team-people/325.jpg",
  "/assets/team-people/AlrginCypress.jpg",
  "/assets/team-people/Dcelysiz.png",
  "/assets/team-people/Hayaizo.jpg",
  "/assets/team-people/isryds.jpg",
  "/assets/team-people/MedivhTirisfal.jpg",
  "/assets/team-people/Sakuranori.jpg",
  "/assets/team-people/Sylvia.jpg",
  "/assets/team-people/Xiayu.jpg",
  "/assets/team-people/yuxialuozi.png",
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
