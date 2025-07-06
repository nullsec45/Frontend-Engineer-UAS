import React, { useEffect, useState } from "react";
import axios from "axios";
import ENDPOINTS from "../utils/constants/endpoints";
import styled from "styled-components";
import { Card,Table } from "../components";


const Container = styled.div`
  margin: 1rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 20px;
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
 const [covids, setCovids] = useState({
     last_update: "", 
     indonesia: [],
     regions:[]
   });

  useEffect(() => {
    async function getDataCovidGlobal() {
      try {
        const response = await axios.get(ENDPOINTS.INDONESIA);
        setCovids({
          last_update: response.data.last_update,
          indonesia: response.data.indonesia,
          regions: response.data.regions
        });
      } catch (error) {
        console.error("Failed to fetch global data:", error);
        setCovids([]);
      }
    }

    getDataCovidGlobal();

  }, []);

  const { last_update, indonesia, regions } = covids;

  return (
    <>
      {/*<Container>*/}    
        <Section>
          <Title>Indonesia Situation</Title>
          <Subtitle>Data Covid Base On Indonesia</Subtitle>
          <CardsContainer>
            {indonesia.length > 0 ? (
              indonesia.map((item, index) => (
                <Card key={index} data={item.total} status={item.status} />
              ))
            ) : (
              <p>Loading data...</p>
            )}
          </CardsContainer>
        </Section>
        <Section>
          <Title>Situation by Provinces</Title>
          <Subtitle>Data Covid Base On Provinces</Subtitle>
          <Table data={regions} />
        </Section>
      {/* </Container> */}
    </>
      
  );
};

export default Indonesia;