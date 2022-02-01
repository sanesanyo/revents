import React from "react";
import NavBar from "../../features/nav/NavBar";
import { Outlet } from "react-router-dom";
import { Container } from "semantic-ui-react";

export default function Layout() {
  return (
    <>
      <NavBar />
      <Container className="main">
        <Outlet />
      </Container>
    </>
  );
}
