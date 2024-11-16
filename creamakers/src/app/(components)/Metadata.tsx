"use client";

import { Descriptions } from "antd";
import { useEffect, useState } from "react";

type Metadata = {
  name: string;
  author: string; 
  date: string;
};

export function Metadata({ name }: { name: string }) {
  const [metadata, setMetadata] = useState<Metadata>({name: "", author: "", date: ""});

  useEffect(() => {
    fetch(`/raw/${name}/metadata.json`)
      .then((response) => {
        if (!response.ok) {
          return { name: `Error: ${response.status}`, author: "", date: "" };
        }
        return response.json();
      })
      .then((json: Metadata) => {
        setMetadata(json);
      });
  }, [name]);
  return (
    <Descriptions title={metadata.name}>
      <Descriptions.Item label="作者">{metadata.author}</Descriptions.Item>
      <Descriptions.Item label="日期">{metadata.date}</Descriptions.Item>
    </Descriptions>
  );
}
