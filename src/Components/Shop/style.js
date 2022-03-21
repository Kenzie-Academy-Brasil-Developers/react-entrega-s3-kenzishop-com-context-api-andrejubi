import styled from "styled-components";

export const ContainerMainShop = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContainerDivShop = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ImgBanner = styled.img`
  max-height: 130px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContainerProductsShop = styled.div`
  padding: 10px;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TitleProducts = styled.h4`
  max-width: 100%;
  font-size: 30px;
  padding: 20px;
  background-color: Black;
  color: white;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
