
import React, { useState } from "react";
import "./NavbarStyles.css";
import { BurgerSpin as Icon } from "react-icons-animated";
import { Link } from "react-router-dom";
import { Home, Menu, Close } from "@mui/icons-material";
import logo from "../assets/mainlogo.png"
import { ReactSVG } from 'react-svg';
import { useTranslation, withTranslation, Trans } from 'react-i18next';

const Navbar = () => {
  const [icon, setIcon] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang)
  }
  const MenuItems = [
    // Make a list of Navlinks & their properties.
    // {
    //   title:"Home",
    //   url:"#hero",
    //   cName:"nav-links",
    //   icon:""
    // },
    // Make a list of Navlinks & their properties.
    {
      title: t("services"),
      url: "#services",
      cName: "nav-links",
      icon: ""
    },
    // Make a list of Navlinks & their properties.
    {
      title: t("gallery"),
      url: "#recommend",
      cName: "nav-links",
      icon: ""
    },
    // Make a list of Navlinks & their properties.
    {
      title: t("testimonials"),
      url: "#testimonials",
      cName: "nav-links",
      icon: ""
    },
    {
      title: t("about"),
      url: "#aboutus",
      cName: "nav-links",
      icon: ""
    },
  ];
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    // Call the corresponding function based on the selected option
    switch (event.target.value) {
      case '🇩🇪':
        changeLanguageHandler("de")
        break;
      case '🇺🇸':
        changeLanguageHandler("en")
        break;
      case '🇸🇦':
        changeLanguageHandler("ar")
        break;
      // Add more cases for additional options
      default:
        changeLanguageHandler("de")

        break;
    }
  };
  return (
    <nav className="NavbarItems">
      <div className="logo">
        <img src={logo} />
      </div>
      <div>
        <select value={selectedOption} onChange={handleOptionChange} className="dropdown">
          <option value="🇩🇪">🇩🇪</option>
          <option value="🇺🇸">🇺🇸</option>
          <option value="🇸🇦">🇸🇦</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="menu-icons" onClick={() => setIcon(!icon)}>
        {!icon ? <Menu /> : <Close />}

      </div>
      <ul className={icon ? "nav-menu active" : "nav-menu"}>

        {MenuItems.map((item, index) => (
          <li className="navLi" key={index}>
            <a href={item.url} className={item.cName}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;