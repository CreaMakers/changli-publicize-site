"use client";

import { HomeOutlined, PhoneOutlined, ProjectOutlined, SnippetsOutlined } from "@ant-design/icons";
import { Menu, MenuProps, Space, Typography } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import { usePathname, useRouter } from "next/navigation";

const {Link, Text} = Typography;

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "home", label: "主页", icon: <HomeOutlined /> },
  { key: "posts/projects", label: "项目", icon: <ProjectOutlined /> },
  { key: "posts/information", label: "资料", icon: <SnippetsOutlined /> },
  { key: "posts/contact", label: "联系我们", icon: <PhoneOutlined /> },
];

export function SiderMenu() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (key: string) => {
    router.push(`/${key == "home" ? "" : key}`);
  };

  const activeKey = items.find((item) => pathname.startsWith(`/${item?.key}`))?.key?.toString() ?? "home";

  return (
    <div className="w-full h-screen top-0 sticky flex flex-col">
      <Menu mode="inline" items={items} defaultSelectedKeys={[activeKey]} onClick={(e) => handleNavigation(e.key)} />
      <div className="mt-auto justify-center flex text-center mb-7">
        <Space direction="vertical">
          <Link href="https://beian.miit.gov.cn/" target="_blank">湘ICP备2023033213号-2</Link>
          <Text>&copy; 2024 CreaMakers 版权所有</Text>
        </Space>
      </div>
    </div>
  );
}
