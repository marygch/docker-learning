import React from "react";
import { Layout } from "antd";

const { Content, Footer } = Layout;

const Body = (pros) => {
  return (
    <>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content"> {pros.children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Maria Garcia</Footer>
    </>
  );
};

export default Body;
