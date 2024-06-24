import React from "react";
import "./footer.css";

const Footer = () => {
  const langs = [
    "English",
    "Español",
    "Català",
    "Français (France)",
    "Română",
    "Italiano",
  ];

  const opts = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit Distinctio eveniet Dolorem laboriosam rem hic sunt eaque illo eum eius molestias ab excepturi totam Iusto esse, at consequatur eos velit odit",
  ];

  return (
    <div className="footer">
      <div className="footer_top">
        {langs.map((lang, inx) => (
          <span className="lang" key={inx}>
            {lang}
          </span>
        ))}
      </div>
      <div className="footer_bottom">
        {opts
          .join(",")
          .split(" ")
          .map((opt, inx) => {
            return <span className="opt">{opt}</span>;
          })}
      </div>
      <span className="cr">Meta © 2024</span>
    </div>
  );
};

export default Footer;
