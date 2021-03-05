import React, { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { Radio, Row, PageHeader, Col, Descriptions } from "antd";

const YAML = require("json-to-pretty-yaml");

const GetCode = ({ code, mode }) => {
  const isJson = mode && mode === "json";
  if (Array.isArray(code)) {
    return code.map((element) => {
      const formatedCode = isJson
        ? JSON.stringify(element, null, " ")
        : YAML.stringify(element);
      return (
        <Col className="gutter-row">
          <CopyBlock
            language="jsx"
            text={formatedCode || "/** Select an example **/"}
            codeBlock
            theme={dracula}
            showLineNumbers={false}
            codeContainerStyle={{ width: 400 }}
          />
        </Col>
      );
    });
  }
  const formatedCode = isJson
    ? JSON.stringify(code, null, " ")
    : YAML.stringify(code);
  return (
    <CopyBlock
      language="jsx"
      text={formatedCode || "/** Select an example **/"}
      codeBlock
      theme={dracula}
      showLineNumbers={false}
      codeContainerStyle={{ width: 800 }}
    />
  );
};

const CodeTabs = ({ dockerExample }) => {
  const [mode, setMode] = useState("yaml");

  return (
    <>
      <Row className="code-container" type="flex">
        <Col span={24}>
          <PageHeader
            style={{ padding: 0 }}
            title={dockerExample?.header || ""}
            subTitle={dockerExample?.name || "Select an example"}
          />
        </Col>
        <Descriptions title="">
          <Descriptions.Item label="Description" span={24}>
            {dockerExample?.description || "Not Defined"}
          </Descriptions.Item>
          <Descriptions.Item label="Notes" span={24}>
            {dockerExample?.notes || "Not Defined"}
          </Descriptions.Item>
        </Descriptions>
        
        <Col span={4}>
          <Radio.Group
            onChange={(e) => {
              setMode(e.target.value);
            }}
            value={mode}
            style={{ marginBottom: 8 }}
          >
            <Radio.Button value="yaml">YAML</Radio.Button>
            <Radio.Button value="json">JSON</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>

      <Row className="code-container" gutter={16}>
        {dockerExample?.data ? (
          <GetCode code={dockerExample?.data} mode={mode} />
        ) : (
          []
        )}
      </Row>
    </>
  );
};

export default CodeTabs;
