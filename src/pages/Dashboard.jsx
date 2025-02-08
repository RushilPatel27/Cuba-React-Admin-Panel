import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  return (
    <>
      <div className="" id="pageWrapper">
        <Container fluid className="p-0">
          <Row>
            <Col md={6} lg={2}>
              <div className="p-3 text-center">
                <Image
                  src="https://admin.pixelstrap.com/cuba/assets/images/logo/logo.png"
                  className="img-fluid"
                />
              </div>
              <Sidebar style={{ height: "100vh" }}>
                <Menu>
                  <SubMenu
                    icon={<FontAwesomeIcon icon={faHouse} />}
                    label="Charts"
                  >
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
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
