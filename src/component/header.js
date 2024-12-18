"use client";
import { useState, useEffect } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { TiThMenuOutline } from "react-icons/ti";

const menuItems = [
  { id: 1, path: "/#home", name: "Home" },
  { id: 2, path: "/#aboutme", name: "About Me" },
  { id: 3, path: "/#projects", name: "Projects" },
  { id: 4, path: "/#contact", name: "Contact" },
];

const headerText = [
  {
    id: 1,
    text: "Hi,I'm Srijan",
    text2: "A Front-End Developer",
    text3:
      " A kid inspired by Spider-Man, now crafting the web as a developer.",
  },
];

export default function Header() {
  const [lightMode, setLightMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (lightMode) {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
  }, [lightMode]);

  return (
    <div className="container" id="home">
      <div className="header">
        <div className="logo">
          <h3>
            Srijan<span style={{ color: "#0dc47e" }}>.js</span>
          </h3>
        </div>
        <div className="sub-header">
          <div className={`menu ${isOpen ? "menu-open" : ""}`}>
            {menuItems?.map((item) => (
              <a key={item.id} href={item.path}>
                {item.name}
              </a>
            ))}
          </div>
          <div className="mobile-menu">
            <TiThMenuOutline onClick={() => setIsOpen(!isOpen)} />
          </div>
          <div className="resume">
            <a href="/SRIJAN.pdf" download>
              <button>RESUME</button>
            </a>
          </div>

          <div className="mode" onClick={() => setLightMode(!lightMode)}>
            {lightMode ? <CiLight /> : <MdOutlineDarkMode />}
          </div>
        </div>
      </div>

      <div className="text">
        <h1>{headerText[0].text}</h1>
        <h2>{headerText[0].text2}</h2>
        <p>{headerText[0].text3}</p>
      </div>
    </div>
  );
}
