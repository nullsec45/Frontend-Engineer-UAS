import React from "react";
import styled from "styled-components";

const Column = styled.div`
  flex: 1;
  padding: 0 10px;

  @media screen and (max-width: 600px) {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
`;

const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 30px;
  border-radius: 5%;
  text-align: center;
  background-color: #ffffff;

  @media screen and (max-width: 600px) {
    padding: 20px;
  }

  @media screen and (max-width: 992px) {
    padding: 30px;
  }
`;

const CardTotal = styled.h1`
  font-size: 3.815rem;
  color: ${(props) => props.color};

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 992px) {
    font-size: 3rem;
  }

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const CardTitle = styled.h2`
  /* Jika ingin styling khusus, tambahkan di sini */
`;

const Card = (props) => {
  const { data, status } = props;
  const formattedData = data.toLocaleString();

  let color = "";
  if (status === "confirmed") {
    color = "#06D6A0";
  } else if (status === "recovered") {
    color = "#118AB2";
  } else if (status === "death") {
    color = "#EF476F";
  }

  return (
    <Column>
      <CardContainer>
        <CardTitle>{status}</CardTitle>
        <CardTotal color={color}>{formattedData}</CardTotal>
      </CardContainer>
    </Column>
  );
};

export default Card;
