import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import { Col, Row } from "antd";
import { SiderMenu } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CreaMakers",
  description: "CreaMaker 是由长沙理工大学计算机学院的学生自主创建的组织",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <Row>
            <Col span={4}>
              <SiderMenu />
            </Col>
            <Col span={20}>
              <div className="p-7">{children}</div>
            </Col>
          </Row>
        </AntdRegistry>
      </body>
    </html>
  );
}
