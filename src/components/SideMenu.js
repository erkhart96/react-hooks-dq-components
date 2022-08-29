import React from "react";
import MenuLinks from "./MenuLinks";
import Logo from './Logo'
import Search from './Search'

function SideMenu() {
  return (
    <aside className="side-bar open"><Logo /><MenuLinks /><Search /></aside>
  );
}

export default SideMenu;
