import React, { useState } from "react";
import bg from "./bg.jpg";
import { Button, Row, Col, Container } from "react-bootstrap";

export default () => {
  const [cs, setCs] = useState(false);
  return (
    <Container fluid style={styles.container}>
      <Row>
        <Col lg={7} sm={12}>
          <h1 style={styles.heading}>
            Creating awareness with a touch of humour.😉
          </h1>
          <div style={{ alignItems: "center", }}>
            <Button style={styles.button} variant="outline-light">
              <i className="fab fa-android"></i>&nbsp;&nbsp;
              {"Download"}
            </Button>
            <Button style={styles.button} variant="dark" disabled>
              <i className="fab fa-apple"></i>&nbsp;&nbsp;
              {"Coming soon..."}
            </Button>
          </div>
        </Col>
        <Col lg={5} sm={12}>

        </Col>
      </Row>
    </Container>
  );
};

const styles = {
  container: {
    backgroundColor: "#6617cb",
    backgroundImage: "linear-gradient(320deg, #6617cb 5%, #cb218e 76%)",
    height: 600,
    backgroundSize: "cover",
  },
  heading: {
    padding: "8vw",
    color: "white",
    textAlign: "left",
    fontFamily: "cursive",
  },
  button: {
    padding: "0.6vw 1.2vw",
    margin: "auto 20px 20px 20px",
    fontSize: 21,
  },
};
