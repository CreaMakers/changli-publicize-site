"use client";

import { useState } from "react";

export default function Post({ params }: { params: { name: string } }) {
  const name = params.name;

  const [markdown, setMarkdown] = useState<string>("");

  fetch(`/markdown/${name}.md`)
    .then((response) => response.text())
    .then((text) => {
      console.log(text);
      setMarkdown(text);
    });

  return (
    <div>
      <p>Post Name: {name}</p>
      <pre>{markdown}</pre>
    </div>
  );
}
