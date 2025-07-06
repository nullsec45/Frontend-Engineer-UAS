import React from "react";
import styled from "styled-components";
import Table from "../Table/Table";

const Container = styled.div`
  margin: 1rem;
`;

const ProvinceSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.h1`
  color: #06d6a0;
  margin-bottom: 1rem;
  font-size: 3.52rem;
`;

const Subtitle = styled.h4`
  color: #118ab2;
  margin-bottom: 1rem;
  font-size: 1.563rem;
`;

const Province = ({ data }) => {
  return (
    <Container>
      <ProvinceSection>
        <Title>Provinsi</Title>
        <Subtitle>Data Covid Berdasarkan Provinsi</Subtitle>
        <Table data={data} />
      </ProvinceSection>
    </Container>
  );
};

export default Province;
