import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import { Col, Row } from "antd";
import { SiderMenu } from "@/app/(components)";

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
            <Col span={20}>{children}</Col>
          </Row>
        </AntdRegistry>
      </body>
    </html>
  );
}
