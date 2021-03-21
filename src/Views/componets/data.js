import React, { useState } from "react";
import { CopyBlock, dracula, monoBlue } from "react-code-blocks";
import { Radio, Row, PageHeader, Col, Descriptions } from "antd";

// tema 8  y 16 atomOneLight
const YAML = require("json-to-pretty-yaml");

const formatCode = (mode, data) => {
  return {
    json: JSON.stringify(data, null, " "),
    yaml: YAML.stringify(data),
  }[mode];
};

const GetCode = ({ data, mode, code, codeColors }) => {
  const dataToRender = [];
  if (code) {
    code.forEach((element, index) => {
      const themeColor = codeColors && codeColors[index] ? monoBlue : dracula;

      dataToRender.push(
        <Col span={12}>
          <CopyBlock
            language="jsx"
            text={element || "/** Select an example **/"}
            codeBlock
            theme={themeColor}
            showLineNumbers={false}
          />
        </Col>
      );
    });
  }
  if (Array.isArray(data)) {
    data.forEach((element) => {
      const formatedCode = formatCode(mode, element);
      dataToRender.push(
        <Col span={12}>
          <CopyBlock
            language="jsx"
            text={formatedCode || "/** Select an example **/"}
            codeBlock
            theme={dracula}
            showLineNumbers={false}
          />
        </Col>
      );
    });
  }
  return dataToRender;
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
            {dockerExample?.notes?.map((item) => (
              <>
                {item}
                <br />
              </>
            )) || "Not Defined"}
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
        <GetCode
          code={dockerExample?.code}
          data={dockerExample?.data}
          codeColors={dockerExample?.codeColors}
          mode={mode}
        />
      </Row>
    </>
  );
};

export default CodeTabs;
