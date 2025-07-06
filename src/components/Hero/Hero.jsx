import React from "react";
import styled from "styled-components";
import image from "/img/undraw_medical_care_movn 1.png";

const Container = styled.div`
  margin: 1rem;

  @media (min-width: 992px) {
    max-width: 1500px;
    margin: 10rem auto;
  }
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: 992px) {
    margin: 0 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

const HeroLeft = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 992px) {
    flex-basis: 55%;
  }
`;

const HeroTitle = styled.h2`
  color: #06d6a0;
  margin-bottom: 1rem;
  font-size: 2.44rem;
`;

const HeroGenre = styled.h3`
  color: #118ab2;
  margin-bottom: 1rem;
`;

const HeroDescription = styled.p`
  color: #64748b;
  margin-bottom: 1rem;
`;

const HeroButton = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  background-color: #06d6a0;
  color: #fff;

  &:hover {
    cursor: pointer;
    opacity: 50%;
    transition: background-color 1s ease 0s;
  }

  &:active {
    cursor: pointer;
    transform: scale(1.02);
    transition: transform 0.1s ease 0s;
  }
`;

const HeroRight = styled.div`
  @media (min-width: 992px) {
    flex-basis: 45%;
  }
`;

const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 25px;
`;

const Hero = () => {
  return (
    <Container>
      <HeroSection>
        <HeroLeft>
          <HeroTitle>Covid ID</HeroTitle>
          <HeroGenre>Monitoring perkembangan covid</HeroGenre>
          <HeroDescription>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            cum accusamus quisquam earum velit ea nobis maiores exercitationem
            nam temporibus.
          </HeroDescription>
          <HeroButton>Vaccine</HeroButton>
        </HeroLeft>
        <HeroRight>
          <HeroImage src={image} alt="placeholder" />
        </HeroRight>
      </HeroSection>
    </Container>
  );
};

export default Hero;
