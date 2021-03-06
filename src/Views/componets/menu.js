import React, { useState, useEffect } from "react";

import { Menu } from "antd";
import {
  AppstoreOutlined,
  RightCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import menuOptions from "../dockerData";

const { SubMenu } = Menu;
const { docker, dockerCompose, kubernets } = menuOptions;

const MenuExamples = ({ onSelectOption }) => {
  const rootSubmenuKeys = ["docker", "dockerCompose", "kubernets"];
  const [openKeys, setOpenKeys] = useState(["docker", "sub1"]);

  useEffect(() => {
    onSelectOption({
      header: "docker",
      ...docker[Object.keys(docker || {})[0]],
    });
  }, []);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{ width: 256 }}
    >
      <SubMenu key="sub1" icon={<RightCircleOutlined />} title="docker">
        {(docker || []).map((dockerExample) => {
          const newName = dockerExample?.name;
          return (
            <Menu.Item
              key={newName}
              onClick={() => {
                onSelectOption({ header: "docker", ...dockerExample });
              }}
            >
              {newName}
            </Menu.Item>
          );
        })}
      </SubMenu>
      <SubMenu key="sub2" icon={<AppstoreOutlined />} title="docker-compose">
        {(dockerCompose || []).map((dockerExample) => {
          const newName = dockerExample?.name;
          return (
            <Menu.Item
              key={newName}
              onClick={() => {
                onSelectOption({
                  header: "docker-compose",
                  ...dockerExample,
                });
              }}
            >
              {newName}
            </Menu.Item>
          );
        })}
      </SubMenu>
      <SubMenu key="sub4" icon={<SettingOutlined />} title="kubernets">
        {(kubernets || []).map((dockerExample) => {
          const newName = dockerExample?.name;
          return (
            <Menu.Item
              key={newName}
              onClick={() => {
                onSelectOption({
                  header: "kubernets",
                  ...dockerExample,
                });
              }}
            >
              {newName}
            </Menu.Item>
          );
        })}
      </SubMenu>
    </Menu>
  );
};

export default MenuExamples;
