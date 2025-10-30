"use client";
import Image from "next/image";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import ScrollAnimation from "../common/ScrollAnimation";

const ServiceItem = ({ title, description, points, imgSrc }) => {
  return (
    <Row>
      <Col
        lg={6}
        className="order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center"
      >
        <h3 className="fs-3">{title}</h3>
        <p className="fs-6">{description}</p>
        <ul>
          {points.map((point, index) => (
            <li key={index}>
              <i className="bi bi-check2-all"></i> <span>{point}</span>
            </li>
          ))}
        </ul>
      </Col>
      <Col lg={6} className="order-1 order-lg-2 text-center">
        <Image
          src={imgSrc}
          alt={title}
          className="img-fluid"
          height={500}
          width={500}
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
      </Col>
    </Row>
  );
};

export default function TabListServices({ services }) {
  return (
    <div className="container">
      <ScrollAnimation animation="fadeInUp" duration={0.5} delay={0.1}>
        <Tab.Container id="servicesTabs" defaultActiveKey="tab-1">
          <Row className="g-2">
            <Col xs={12}>
              <Nav variant="tabs" className="row g-2">
                {services.map((service) => (
                  <Nav.Item key={service.id} className="col-3">
                    <Nav.Link
                      eventKey={`tab-${service.id}`}
                      className="p-3 w-100"
                    >
                      <h3 className="fs-5">{service.title}</h3>
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col xs={12}>
              <ScrollAnimation animation="fadeIn" duration={0.5} delay={0.2}>
                <Tab.Content>
                  {services.map((service) => (
                    <Tab.Pane key={service.id} eventKey={`tab-${service.id}`}>
                      <ServiceItem {...service} />
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </ScrollAnimation>
            </Col>
          </Row>
        </Tab.Container>
      </ScrollAnimation>
    </div>
  );
}
