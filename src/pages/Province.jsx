import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Table,Form } from "../components";
// import data from "../utils/data/provinces";
import CovidContext from "../Context/CovidContext";

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

const Province = () => {
  // const [provinces, setProvinces] = useState(data.regions);
  const { covids, setCovids } = useContext(CovidContext);
 
  const handleSubmit = ({ status, total, provinceInput }) => {
    const covid = status.toLowerCase();

  
    const updatedProvinces = covids.map((province) => {
    if (province.name === provinceInput) {
      return {
        ...province,
        numbers: {
          ...province.numbers,
          [covid]: total,
        },
      };
    }
    return province;
  });

  
    setCovids(updatedProvinces);

  };

  return (
    <>
        <Section>
          <Title>Provinces</Title>
          <Subtitle>Data Covid Base On Provinces</Subtitle>
          <Table data={covids} />
          <Form data={covids} onSubmit={(res) => handleSubmit(res)} />
        </Section>
    </>
      
  );
};

export default Province;