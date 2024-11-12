import { useEffect, useState } from "react";

const SidePanel = ({ headings }) => {
  const [activeHeading, setActiveHeading] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(h => document.getElementById(h.text));
      for (const el of headingElements) {
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveHeading(el.id);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  return (
    <nav style={{
      position: "fixed",
      top: "20px",
      right: "20px",
      width: "200px",
      background: "#f9f9f9",
      padding: "10px",
      borderRadius: "5px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
    }}>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {headings.map((heading, index) => (
          <li
            key={index}
            style={{
              margin: "5px 0",
              fontWeight: activeHeading === heading.text ? "bold" : "normal",
              marginLeft: `${(heading.depth - 1) * 20}px`
            }}
          >
            <a
              href={`#${heading.text}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.text).scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                color: activeHeading === heading.text ? "#007bff" : "#333",
                textDecoration: "none",
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidePanel;
