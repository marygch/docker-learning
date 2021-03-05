import React, { useState } from "react";
import { PageHeader, Row, Col } from "antd";
import SubMenu from "./componets/menu";
import CodeTabs from "./componets/data";

const Welcome = (props) => {
  const [dockerExample, setDataExample] = useState({});
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Learn with docker"
        subTitle="JSONS for test"
      />
      <Row>
        <Col span={6}>
          <SubMenu
            onSelectOption={(data) => {
              console.log("data", data);
              setDataExample(data);
            }}
          />
        </Col>
        <Col span={18}>
          <CodeTabs dockerExample={dockerExample} />
        </Col>
      </Row>
    </div>
  );
};

export default Welcome;
