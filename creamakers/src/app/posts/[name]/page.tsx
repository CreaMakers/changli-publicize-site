"use client";

import { Markdown, MarkdownAnchor, Metadata } from "@/app/(components)";
import { ToTopOutlined } from "@ant-design/icons";
import { Col, Divider, FloatButton, Row } from "antd";
import { use } from "react";

export default function Post({ params }: { params: Promise<{ name: string }> }) {
  const { name } = use(params);

  return (
    <Row className="p-7">
      <Col span={20}>
        <Metadata name={name} />
        <Divider style={{ borderColor: "#7cb305" }} />
        <Markdown name={name} />

        <FloatButton
          icon={<ToTopOutlined />}
          type="primary"
          onClick={() => {
            scrollTo(0, 0);
          }}
        />
      </Col>
      <Col span={4}>
        <MarkdownAnchor name={name} />
      </Col>
    </Row>
  );
}
