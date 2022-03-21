import styled from "styled-components";

export const ContainerProductsCart = styled.div`
  width: 100vw;
  height: 100%;
  max-width: 97vw;
  min-height: 89.1vh;
  padding: 20px;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
export const ContainerCart = styled.div`
  width: 100%;
  color: white;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CardCartMaps = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`;
export const PriceCartTotal = styled.h4`
  @media (max-width: 768px) {
    text-align: center;
  }
`;
