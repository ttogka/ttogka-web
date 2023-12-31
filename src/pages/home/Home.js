import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// img
import logo from "../../assets/images/home_logo_nogra.png";
import background from "../../assets/images/home_background.png";

const Home = () => {
  const naviagte = useNavigate();

  const handlePageClickOrTouch = () => {
    naviagte("/select-menu");
  };

  return (
    <Container
      onClick={handlePageClickOrTouch}
      onTouchStart={handlePageClickOrTouch}
    >
      <LogoImg src={logo} />
      <TextContainer>
        <BoldText>똑 카</BoldText>
        <HrLine />
        <NormalText>똑똑한 카드생활</NormalText>
      </TextContainer>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  background-color: #1b433e;
  color: white;
`;

const LogoImg = styled.img`
  width: 45%;
  margin: 13%;
  align-self: flex-end;
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-top: 30%;
  padding: 7%;
`;

const BoldText = styled.div`
  font-size: 6rem;
  font-family: "Happiness-Sans-Title";
`;

const HrLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 0.3rem solid white;
  margin: 3% 0;
`;

const NormalText = styled.div`
  font-size: 3rem;
  font-weight: 500;
`;
