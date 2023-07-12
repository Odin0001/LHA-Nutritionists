import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import logo from "../assets/pngLogo.png";
import { FaBars } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  const [t, i18n] = useTranslation();

  const [mobile, setMobile] = useState(false);

  function handleMenu() {
    setMobile((prev) => !prev);
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
          <img src={logo} alt="LHA Logo" loading="lazy" />
        </Link>
        <ul className="links">
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={i18n.language == "ar" && "big-font"}
            >
              {t("nav.nav1")}
            </Link>
          </li>
          <li>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={i18n.language == "ar" && "big-font"}
            >
              {t("nav.nav2")}
            </Link>
          </li>
          <li>
            <Link
              to="results"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={i18n.language == "ar" && "big-font"}
            >
              {t("nav.nav3")}
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={i18n.language == "ar" && "big-font"}
            >
              {t("nav.nav4")}
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={i18n.language == "ar" && "big-font"}
            >
              {t("nav.nav5")}
            </Link>
          </li>
        </ul>
        <div className="langs">
          {i18n.language == "ar" && (
            <button
              className="btn"
              onClick={() => {
                i18n.changeLanguage("en");
              }}
            >
              EN
            </button>
          )}
          {i18n.language == "en" && (
            <button
              className="btn"
              onClick={() => {
                i18n.changeLanguage("ar");
              }}
            >
              AR
            </button>
          )}
        </div>
        <FaBars size={27} className="mobile-icon" onClick={handleMenu} />
      </div>

      {/* ------------mobile menu---------------- */}

      {mobile && (
        <div className="mobile-menu">
          <MdOutlineRestaurantMenu
            size={40}
            className="close-icon"
            onClick={handleMenu}
          />
          <ul className="mobile-links">
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={i18n.language == "ar" && "big-font"}
                onClick={handleMenu}
              >
                {t("nav.nav1")}
              </Link>
            </li>
            <li>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={i18n.language == "ar" && "big-font"}
                onClick={handleMenu}
              >
                {t("nav.nav2")}
              </Link>
            </li>
            <li>
              <Link
                to="results"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={i18n.language == "ar" && "big-font"}
                onClick={handleMenu}
              >
                {t("nav.nav3")}
              </Link>
            </li>
            <li>
              <Link
                to="testimonials"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={i18n.language == "ar" && "big-font"}
                onClick={handleMenu}
              >
                {t("nav.nav4")}
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={i18n.language == "ar" && "big-font"}
                onClick={handleMenu}
              >
                {t("nav.nav5")}
              </Link>
            </li>
          </ul>
          <div className="mobile-langs">
            {i18n.language == "ar" && (
              <button
                className="btn"
                onClick={() => {
                  i18n.changeLanguage("en");
                }}
              >
                EN
              </button>
            )}
            {i18n.language == "en" && (
              <button
                className="btn"
                onClick={() => {
                  i18n.changeLanguage("ar");
                }}
              >
                AR
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
