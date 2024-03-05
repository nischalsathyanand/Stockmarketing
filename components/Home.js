import React from "react";
import { useState } from "react";
import Order from "./Order";
import Position from "./Position";
import { Link, useNavigate } from "react-router-dom";
import logoImage from "/images/fb1.png";

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
  const menuStyle = {
    backgroundColor: "#82817f",
  };

  return (
    <div>
      <Menu fixed="top" style={menuStyle} inverted>
        <Container>
          <Menu.Item as="a" header>
            <Image
              src={logoImage}
              size="mini"
              alt="Logo"
              style={{ marginRight: "2.0em" }}
            />
            Firstbench
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

      <Container style={{ maxWidth: "100%", marginTop: "6em" }}>
        <StepGroup size="mini">
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
            <Order />
          </Segment>
        )}
        {activeStep === 1 && (
          <Segment>
            <Position handleStepClick={handleStepClick} />
          </Segment>
        )}
      </Container>
    </div>
  );
}

export default Home;
