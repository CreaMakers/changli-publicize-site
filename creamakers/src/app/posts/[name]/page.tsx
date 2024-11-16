"use client";

import { Markdown, MarkdownAnchor, Metadata } from "@/app/(components)";
import { ToTopOutlined } from "@ant-design/icons";
import { Col, Divider, FloatButton, Row } from "antd";
import { use, useEffect, useState } from "react";

export default function Post({ params }: { params: Promise<{ name: string }> }) {
  const { name } = use(params);

  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(`/raw/${name}/index.md`)
      .then((response) => {
        if (!response.ok) {
          return `Error: ${response.status}`;
        }
        return response.text();
      })
      .then((markdownText) => {
        setMarkdown(markdownText);
      });
  }, [name]);

  return (
    <Row className="p-7">
      <Col span={20}>
        <Metadata name={name} />
        <Divider style={{ borderColor: "#7cb305" }} />
        <Markdown markdown={markdown} />

        <FloatButton
          icon={<ToTopOutlined />}
          type="primary"
          onClick={() => {
            scrollTo(0, 0);
          }}
        />
      </Col>
      <Col span={4}>
        <MarkdownAnchor markdown={markdown} />
      </Col>
    </Row>
  );
}
