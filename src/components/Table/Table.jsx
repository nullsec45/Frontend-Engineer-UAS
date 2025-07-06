import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 1rem;
  overflow-x: auto;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  max-width: 1200px;
  margin: 50px auto;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  color: #06d6a0;
`;

const TableHeader = styled.th`
  border: 1px solid #64748b;
  text-align: center;
  padding: 8px;
`;

const TableData = styled.td`
  border: 1px solid #64748b;
  text-align: center;
  padding: 8px;
  color: #64748b;
`;

const Table = ({ data }) => {
  return (
    <Container>
      <StyledTable>
        <thead>
          <TableRow>
            <TableHeader>No</TableHeader>
            <TableHeader>Provinsi</TableHeader>
            <TableHeader>Positif</TableHeader>
            <TableHeader>Sembuh</TableHeader>
            <TableHeader>Dirawat</TableHeader>
            <TableHeader>Meninggal</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <TableData>{index + 1}</TableData>
              <TableData>{item.name}</TableData>
              <TableData>{item.numbers.confirmed}</TableData>
              <TableData>{item.numbers.recovered}</TableData>
              <TableData>{item.numbers.treatment}</TableData>
              <TableData>{item.numbers.death}</TableData>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </Container>
  );
};

export default Table;
