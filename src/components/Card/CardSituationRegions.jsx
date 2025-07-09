import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 50px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #213547;
  text-align: center;
`;

const Title = styled.h1`
  color: #16c79a;
  font-weight: 600;
  margin-bottom: 5px;
  font-size: 28px;
`;

const Subtitle = styled.p`
  color: #1982c4;
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 30px;
`;

const FlexGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgb(0 0 0 / 0.05);
  padding: 25px 20px;
  text-align: left;
  flex: 1 1 30%;
  max-width: 30%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
  }
`;

const RegionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 20px 0;
  color: #213547;
`;

const StatRow = styled.div`
  display: flex;
  flex-direction: column; /* StatLabel and StatValue will be in separate lines */
  margin-bottom: 14px;
  font-size: 14px;
`;

const StatLabel = styled.span`
  color: #213547;
  font-weight: 500;
  margin-bottom: 5px; /* Add margin between label and value */
`;

const StatValueWithIcon = styled.div`
  display: flex;
  align-items: center;
`;

const StatValue = styled.span`
  color: ${(props) => props.color || "#000"};
  font-weight: 600;
  margin-right: 8px;
`;

const StatIcon = styled.span`
  font-size: 16px;
  opacity: 0.5;
`;

const data = [
  {
    region: "Europe",
    confirmed: "5.005.646",
    recovered: "5.005.646",
    death: "5.005.646",
  },
  {
    region: "Western",
    confirmed: "5.005.646",
    recovered: "5.005.646",
    death: "5.005.646",
  },
  {
    region: "Americas",
    confirmed: "5.005.646",
    recovered: "5.005.646",
    death: "5.005.646",
  },
  {
    region: "Asia",
    confirmed: "5.005.646",
    recovered: "5.005.646",
    death: "5.005.646",
  },
  {
    region: "Europe",
    confirmed: "5.005.646",
    recovered: "5.005.646",
    death: "5.005.646",
  },
  {
    region: "Africa",
    confirmed: "5.005.646",
    recovered: "5.005.646",
    death: "5.005.646",
  },
];

const CardSituationRegions = () => {
  return (
    <Container>
      <FlexGrid>
        {data.map((item, index) => (
          <Card key={index}>
            <RegionTitle>{item.region}</RegionTitle>
            <StatRow>
              <StatLabel>Confirmed</StatLabel>
              <StatValueWithIcon>
                <StatValue color="#16c79a">{item.confirmed}</StatValue>
                <StatIcon>😷</StatIcon>
              </StatValueWithIcon>
            </StatRow>
            <StatRow>
              <StatLabel>Recovered</StatLabel>
              <StatValueWithIcon>
                <StatValue color="#1982c4">{item.recovered}</StatValue>
                <StatIcon>😌</StatIcon>
              </StatValueWithIcon>
            </StatRow>
            <StatRow>
              <StatLabel>Death</StatLabel>
              <StatValueWithIcon>
                <StatValue color="#f06e78">{item.death}</StatValue>
                <StatIcon>💀</StatIcon>
              </StatValueWithIcon>
            </StatRow>
          </Card>
        ))}
      </FlexGrid>
    </Container>
  );
};

export default CardSituationRegions;
