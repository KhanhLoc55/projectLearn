import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skillOne from "../assets/img/skillOne.svg";
import skillTwo from "../assets/img/skillTwo.svg";
import skillThere from "../assets/img/skillThere.svg";
import skillFour from "../assets/img/skillFour.svg";
import "bootstrap/dist/css/bootstrap.min.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skill">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h1>Skills</h1>
              <p>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={skillOne} alt="image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={skillTwo} alt="image" />
                  <h5>Web Designer</h5>
                </div>
                <div className="item">
                  <img src={skillThere} alt="image" />
                  <h5>Logo Designer</h5>
                </div>
                <div className="item">
                  <img src={skillFour} alt="image" />
                  <h5>Ui Designer</h5>
                </div>
                <div className="item">
                  <img src={skillTwo} alt="image" />
                  <h5>Brand Identity</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
