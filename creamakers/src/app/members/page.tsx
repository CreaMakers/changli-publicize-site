"use client";

import { GithubOutlined, HomeOutlined } from "@ant-design/icons";
import { Card, Col, Row, Tag, Typography, Modal, Space } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";

const { Title } = Typography;

interface Member {
  qq_nickname: string;
  qq_number: string;
  join_time: string;
  website_nickname: string;
  github_url: string | null;
  website_url: string | null;
  avatar: string;
  tag: string[] | null;
}

const tagColorMap: { [key: string]: string } = {
  前端: "blue",
  后端: "green",
  移动端: "volcano",
  UI: "purple",
  算法: "geekblue",
};

export default function Members() {
  const [members, setMembers] = useState<Member[]>([]);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetch("/assets/members/members.json")
      .then((response) => response.json())
      .then((data) => setMembers(data));
  }, []);

  const showModal = (member: Member) => {
    setSelectedMember(member);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <Row>
      <Col span={20}>
        <Title level={2}>成员</Title>
        <Row gutter={[16, 16]}>
          {members.map((member, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6} xl={6}>
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
                onClick={() => showModal(member)}
              >
                <Card.Meta
                  title={
                    <Space>
                      {member.website_nickname}
                      {member.tag && (
                        <>
                          {member.tag.map((tag, tagIndex) => (
                            <Tag
                              color={tagColorMap[tag] || "default"}
                              key={tagIndex}
                            >
                              {tag}
                            </Tag>
                          ))}
                        </>
                      )}
                    </Space>
                  }
                  description={
                    <div style={{ flex: 1 }}>
                      <Space direction="vertical">
                        <Space>
                          {member.github_url && (
                            <a
                              href={member.github_url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <GithubOutlined style={{ fontSize: 20 }} />
                            </a>
                          )}

                          {member.website_url && (
                            <a
                              href={member.website_url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <HomeOutlined style={{ fontSize: 20 }} />
                            </a>
                          )}
                        </Space>
                      </Space>
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
        {selectedMember && (
          <Modal
            title={selectedMember.website_nickname}
            open={isModalVisible}
            onOk={handleOk}
            onCancel={handleOk}
            footer={(_, { OkBtn }) => <OkBtn />}
          >
            <Row gutter={8}>
              <Col span={8}>
                <Image
                  alt={selectedMember.website_nickname}
                  src={`/assets/members/avatars/${selectedMember.avatar}`}
                  width={100}
                  height={100}
                  style={{ borderRadius: "50%" }}
                />
              </Col>
              <Col span={16}>
                <p>QQ昵称: {selectedMember.qq_nickname}</p>
                <p>QQ号: {selectedMember.qq_number}</p>
                <p>加入时间: {selectedMember.join_time}</p>
                {selectedMember.github_url && (
                  <p>
                    <GithubOutlined />
                    {" GitHub： "}

                    <a
                      href={selectedMember.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {selectedMember.github_url}
                    </a>
                  </p>
                )}
                {selectedMember.website_url && (
                  <p>
                    <HomeOutlined />
                    {" 个人网站： "}
                    <a
                      href={selectedMember.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {selectedMember.website_url}
                    </a>
                  </p>
                )}
                {selectedMember.tag && (
                  <div>
                    {selectedMember.tag.map((tag, tagIndex) => (
                      <Tag color={tagColorMap[tag] || "default"} key={tagIndex}>
                        {tag}
                      </Tag>
                    ))}
                  </div>
                )}
              </Col>
            </Row>
          </Modal>
        )}
      </Col>
      <Col span={4} />
    </Row>
  );
}
