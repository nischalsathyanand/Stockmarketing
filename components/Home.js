import React from "react";
import { useState } from "react";
import Order from "./Order";
import Position from "./Position";
import { Link, useNavigate } from "react-router-dom";
import logoImage from "/images/firstbench.jpg";

import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Step,
  StepTitle,
  StepGroup,
  StepDescription,
  StepContent,
  Icon,
  Button,
} from "semantic-ui-react";

function Home() {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };
  const navigate = useNavigate();
  const handleSignOut = () => {
    console.log("working");
    navigate("/login");
  };

  return (
    <div>
      <Menu fixed="top" inverted color="grey">
        <Container>
          <Menu.Item as="a" header style={{ color: "orange" }}>
            <Image
              src={logoImage}
              size="mini"
              alt="Logo"
              style={{ marginRight: "2.0em" }}
            />
            First Bench
          </Menu.Item>

          <Menu.Item as="b" position="right">
            <Icon name="user" />
            User Name
          </Menu.Item>
          <Menu.Item as="c">
            <Icon name="sign-out" />
            <Link to="/signout" onClick={handleSignOut}>
              Signout
            </Link>
          </Menu.Item>
        </Container>
      </Menu>

      <Container text style={{ marginTop: "7em" }}>
        <StepGroup>
          <Step
            active={activeStep === 0}
            onClick={() => handleStepClick(0)}
            style={{
              backgroundColor: activeStep === 0 ? "#fcb50d" : "white",
            }}
          >
            <Icon name="home" />
            <StepContent>
              <StepTitle>Home</StepTitle>
              <StepDescription>List the Product</StepDescription>
            </StepContent>
          </Step>

          <Step
            active={activeStep === 1}
            onClick={() => handleStepClick(1)}
            style={{
              backgroundColor: activeStep === 1 ? "#fcb50d" : "white",
            }}
          >
            <Icon name="add circle" />
            <StepContent>
              <StepTitle>Add</StepTitle>
              <StepDescription>Add Your items</StepDescription>
            </StepContent>
          </Step>
        </StepGroup>
        {activeStep === 0 && (
          <Segment>
            <Order handleStepClick={handleStepClick} />
          </Segment>
        )}
        {activeStep === 1 && (
          <Segment>
            <Position />
          </Segment>
        )}
      </Container>
    </div>
  );
}

export default Home;
