import React from "react";
import { Image } from "react-bootstrap";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
  return (
    <div>
      <div className="p-3 text-center">
        <Image
          src="https://admin.pixelstrap.com/cuba/assets/images/logo/logo.png"
          className="img-fluid"
        />
      </div>
      <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <SubMenu icon={<FontAwesomeIcon icon={faHouse} />} label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem icon={<FontAwesomeIcon icon={faHouse} />}>
            Documentation
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faHouse} />}>
            Calendar
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
