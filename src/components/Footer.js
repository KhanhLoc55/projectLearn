import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import linkedin from "../assets/icon/linkedin.svg";
import benhance from "../assets/icon/behance.svg";
import instagram from "../assets/icon/instagram.svg";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/loc-nguyenkhanh-927b0822a/">
                <img src={linkedin} />
              </a>
              <a href="https://www.behance.net/anhlamot55">
                <img src={benhance} />
              </a>
              <a href="">
                <img src={instagram} />
              </a>
            </div>
            <p>All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
