import React from "react";
import { Layout } from "antd";
import logo from "../../../assets/docker-icon.png";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header>
      <div className="logo">
        <img src={logo} width={60}></img>
      </div>
    </Header>
  );
};

export default Navbar;
