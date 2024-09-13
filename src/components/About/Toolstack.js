import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  
  SiVercel,

  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tool-icon">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tool-icon">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tool-icon">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tool-icon">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tool-icon">
        <SiGithub />
      </Col>
    </Row>
  );
}

export default Toolstack;
