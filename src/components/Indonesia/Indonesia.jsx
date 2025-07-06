import React from "react";
import data from "../../utils/data/indonesia";
import styled from "styled-components";
import Card from "../Card/Card";

const Container = styled.div`
  margin: 1rem;
`;

const IndonesiaSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.h1`
  color: #06d6a0;
  margin-bottom: 1rem;
  font-size: 3.52rem;

  @media screen and (max-width: 600px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 992px) {
    font-size: 3.2rem;
  }

  @media screen and (min-width: 1200px) {
    font-size: 3.52rem;
  }
`;

const Subtitle = styled.h4`
  color: #118ab2;
  margin-bottom: 1rem;
  font-size: 1.563rem;

  @media screen and (max-width: 600px) {
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 992px) {
    font-size: 1.45rem;
  }

  @media screen and (min-width: 1200px) {
    font-size: 1.563rem;
  }
`;

const CardsContainer = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Indonesia = () => {
  return (
    <Container>
      <IndonesiaSection>
        <Title>Indonesia</Title>
        <Subtitle>Data Covid Berdasarkan Indonesia</Subtitle>
        <CardsContainer>
          {data.indonesia.map((item, index) => (
            <Card key={index} data={item.total} status={item.status} />
          ))}
        </CardsContainer>
      </IndonesiaSection>
    </Container>
  );
};

export default Indonesia;
