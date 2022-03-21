import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 230px;
  height: 400px;
  background-color: #fff;
  margin: 20px;
  padding: 5px;
  color: black;
  text-align: center;
  :hover {
    -webkit-box-shadow: 5px 5px 14px 5px rgba(0, 0, 0, 0.5);
    box-shadow: 5px 5px 14px 5px rgba(0, 0, 0, 0.5);
  }
`;

export const ImgProductCard = styled.img`
  height: 8.25rem;
  width: auto;
`;

export const PriceCard = styled.h4`
  font-size: 40px;
  color: black;
`;

export const ButtonCard = styled.button`
  height: 30px;
  width: 100%;
  border: 0;
  margin-top: 40px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

export const NameCard = styled.p`
  height: 70px;
`;
