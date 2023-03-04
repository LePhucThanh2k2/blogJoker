import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api";
import { mappingItemsMenu } from "../../helper";
import { ThemeContext } from "../../hooks/ToggleContext";
import Logo from "../../imgs/logo.png";
import "./style.scss";
const Navbar = () => {
  const contextTheme = useContext(ThemeContext);
  const [showMenu, setShowMenu] = useState(false);
  const [itemsMenu, setItemsMenu] = useState([]);
  const [showFormSearch, setShowFormSearch] = useState("hide");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/menus/v1/menus/main-menu-vi");
        const data = res.data.items.map((item) => mappingItemsMenu(item));
        setItemsMenu(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  function renderItemMenu(item) {
    return (
      <li className="header__menu-item" key={item.id}>
        <Link to={item.url}>{item.name}</Link>
        {item.childItems.length > 0 && (
          <ul>{item.childItems.map(renderItemMenu)}</ul>
        )}
      </li>
    );
  }
  return (
    <div className={`header  ${contextTheme.theme}`}>
      <div className="header__container">
        <div className="header__logo">
          <img src={Logo} alt="logo-joker" />
        </div>
        <div
          className={`header__search-close ${showFormSearch}`}
          onClick={() => {
            setShowFormSearch("hide");
          }}
        ></div>
        <div
          className={`header__search ${contextTheme.theme} ${showFormSearch}`}
        >
          <span className="header__search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input type="text" placeholder="Search for something" />
        </div>

        <div className={`header__menu ${contextTheme.theme}`}>
          <ul>{itemsMenu.map(renderItemMenu)}</ul>
        </div>

        <div className="header__box">
          <ul>
            <li>
              <Link className="header__login" to="/login">
                Login
              </Link>
            </li>
          </ul>
          <div
            className={`header__dark-mode ${contextTheme.theme}`}
            onClick={contextTheme.toggleTheme}
          >
            <span className="header__dark-mode-icon--moon">
              <i className="fa-solid fa-moon"></i>
            </span>
            <div className={`btn-toggle ${contextTheme.theme}`}></div>
            <span className="header__dark-mode-icon--sun">
              <i className="fa-solid fa-sun"></i>
            </span>
          </div>
          {/* mobile -start */}
          <div className={`header__menu-mobile ${contextTheme.theme}`}>
            <span
              className="header__menu-mobile-item"
              onClick={() => {
                setShowFormSearch(showFormSearch === "hide" ? "" : "hide");
              }}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <span
              className="header__menu-mobile-item "
              onClick={contextTheme.toggleTheme}
            >
              <i
                className={`fa-solid ${
                  contextTheme.theme === "dark" ? "fa-sun" : "fa-moon"
                }`}
              ></i>
            </span>
            <span
              className="header__menu-mobile-item"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <i className="fa-solid fa-bars"></i>
            </span>
          </div>
        </div>

        {showMenu && (
          <div className="menu-mobile">
            <div
              className="menu-mobile__close-icon"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <span>
                <i className="fa-solid fa-xmark"></i>
              </span>
            </div>
            <div className={`menu-mobile-links ${contextTheme.theme}`}>
              <ul>{itemsMenu.map(renderItemMenu)}</ul>
            </div>
          </div>
        )}
        {/* mobile -end */}
      </div>
    </div>
  );
};

export default Navbar;
