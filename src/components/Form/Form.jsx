import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Alert from "../Alert/Alert";
import image from "/img/undraw_conceptual_idea_xw7k 1.png";

const Container = styled.div`
  margin: 1rem;

  @media (min-width: 992px) {
    max-width: 1400px;
    margin: 3rem auto;
  }
`;

const FormSection = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 992px) {
    margin: 0 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
`;

const FormLeft = styled.div`
  margin-bottom: 0;
  text-align: center;

  @media (min-width: 768px) {
    flex-basis: 50%;
    text-align: left;
  }

  @media (min-width: 992px) {
    flex-basis: 55%;
    text-align: left;
    margin-right: 3rem;
  }
`;

const FormImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 25px;
`;

const FormRight = styled.div`
  text-align: left;

  @media (min-width: 768px) {
    flex-basis: 50%;
    text-align: right;
    padding: 1rem;
    margin-left: 2rem;
  }

  @media (min-width: 992px) {
    flex-basis: 45%;
    text-align: right;
    padding: 1rem;
  }
`;

const FormTitle = styled.h2`
  color: #06d6a0;
  margin-bottom: 1rem;
  font-size: 2.44rem;
  text-align: left;
`;

const FormContainer = styled.div`
  width: 30vw;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: flex;
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #64748b;
`;

const FormInput = styled.input`
  display: flex;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const FormSelect = styled.select`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  height: 3em;
  border-radius: 0.25em;
  overflow: hidden;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &::after {
    content: "\\25BC";
    position: absolute;
    top: 0;
    right: 0;
    padding: 1em;
    background-color: #34495e;
    transition: 0.25s all ease;
    pointer-events: none;
  }
`;

const FormButton = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  background-color: #06d6a0;
  color: #fff;
  justify-content: end;

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

const Form = ({ data, onSubmit }) => {
  const [provinces, setProvinces] = useState(data);
  const [provinceInput, setProvinceInput] = useState("");
  const [status, setStatus] = useState("");
  const [total, setTotal] = useState("");
  const [isProvinceError, setIsProvinceError] = useState(false);
  const [isStatusError, setIsStatusError] = useState(false);
  const [isTotalError, setIsTotalError] = useState(false);

  function handleProvince(event) {
    event.preventDefault();
    setProvinceInput(event.target.value);
  }

  function handleStatus(event) {
    event.preventDefault();
    setStatus(event.target.value);
  }

  function handleTotal(event) {
    event.preventDefault();
    setTotal(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!status) {
      setIsStatusError(true);
    } else {
      setIsStatusError(false);
    }

    if (!provinceInput) {
      setIsProvinceError(true);
    } else {
      setIsProvinceError(false);
    }

    if (!total) {
      setIsTotalError(true);
    } else {
      setIsTotalError(false);
    }

    onSubmit({ status, total, provinceInput });
  }

  useEffect(() => {}, [provinces]);

  return (
    <Container>
      <FormSection>
        <FormLeft>
          <FormImage src={image} alt="Conceptual Idea" />
        </FormLeft>
        <FormRight>
          <FormTitle>Form Covid</FormTitle>
          <form onSubmit={handleSubmit}>
            <FormContainer>
              {/* Province Dropdown */}
              <FormGroup>
                <FormLabel htmlFor="Provinsi">Provinsi</FormLabel>
                <FormSelect onChange={handleProvince} value={provinceInput}>
                  <option value="">Pilih Provinsi</option>
                  {provinces.map((province, index) => (
                    <option key={index} value={province.name}>
                      {province.name}
                    </option>
                  ))}
                </FormSelect>
                {isProvinceError && (
                  <Alert color="red">
                    <small>Data wajib diisi!</small>
                  </Alert>
                )}
              </FormGroup>

              {/* Status Dropdown */}
              <FormGroup>
                <FormLabel htmlFor="Status">Status</FormLabel>
                <FormSelect onChange={handleStatus} value={status}>
                  <option value="">Pilih Status</option>
                  <option value="positive">Positif</option>
                  <option value="recovered">Sembuh</option>
                  <option value="hospitalized">Dirawat</option>
                  <option value="death">Meninggal</option>
                </FormSelect>
                {isStatusError && (
                  <Alert color="red">
                    <small>Data wajib diisi!</small>
                  </Alert>
                )}
              </FormGroup>

              {/* Total Input */}
              <FormGroup>
                <FormLabel htmlFor="total">Jumlah</FormLabel>
                <FormInput
                  type="number"
                  name="total"
                  id="total"
                  placeholder="Masukkan Jumlah"
                  value={total}
                  onChange={handleTotal}
                />
                {isTotalError && (
                  <Alert color="red">
                    <small>Data wajib diisi!</small>
                  </Alert>
                )}
              </FormGroup>
            </FormContainer>

            {/* Submit Button */}
            <FormButton type="submit" onClick={handleSubmit}>
              Submit
            </FormButton>
          </form>
        </FormRight>
      </FormSection>
    </Container>
  );
};

export default Form;
