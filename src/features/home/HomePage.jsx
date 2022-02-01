import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Segment,
} from "semantic-ui-react";

export default function HomePage() {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src={require("../../assets/logo.png")}
            style={{ marginBottom: 12 }}
          />
        </Header>
        <Link to="/events">
          <Button size="huge" inverted>
            Get started
            <Icon name="right arrow" inverted />
          </Button>
        </Link>
      </Container>
    </Segment>
  );
}
