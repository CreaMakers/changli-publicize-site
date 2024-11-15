import { Markdown, Metadata } from "@/app/(components)";
import { Divider } from "antd";
import { use } from "react";

export default function Post({ params }: { params: Promise<{ name: string }> }) {
  const { name } = use(params);

  return (
    <div className="p-7">
      <Metadata name={name} />
      <Divider style={{ borderColor: "#7cb305" }} />
      <Markdown name={name} />
    </div>
  );
}
