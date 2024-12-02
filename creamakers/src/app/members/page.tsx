"use client";

import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import { Card, Col, Row, Typography } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";

const { Title } = Typography;

interface Member {
  qq_nickname: string;
  website_nickname: string;
  github_url: string;
  website_url: string | null;
  avatar: string;
}

export default function Members() {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    fetch("/assets/members/members.json")
      .then((response) => response.json())
      .then((data) => setMembers(data));
  }, []);

  return (
    <>
      <Title level={2}>成员</Title>
      <Row gutter={[16, 16]}>
        {members.map((member, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
            <Card
              hoverable
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
              cover={
                <Image
                  alt={member.website_nickname}
                  src={`/assets/members/avatars/${member.avatar}`}
                  style={{ objectFit: "cover" }}
                  width={200}
                  height={200}
                />
              }
            >
              <Card.Meta
                title={member.website_nickname}
                description={
                  <div style={{ flex: 1 }}>
                    {/* <p>QQ昵称: {member.qq_nickname}</p> */}
                    <p>
                      <GithubOutlined />{" "}
                      <a
                        href={member.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </p>
                    {member.website_url && (
                      <p>
                        <LinkOutlined />{" "}
                        <a
                          href={member.website_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          个人网站
                        </a>
                      </p>
                    )}
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
