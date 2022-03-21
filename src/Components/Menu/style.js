import styled from "styled-components";

export const HeaderMenu = styled.header`
  height: 100px;
  padding: 2px;
  padding-left: 10px;
  background-color: grey;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const NameMenu = styled.h4`
  margin: 0;
  margin-right: 20px;
  font-size: 50px;
  cursor: pointer;
`;

export const DivSearch = styled.div`
  display: flex;
  @media (max-width: 768px) {
    width: 150px;
    display: none;
  }
`;
export const InputSearch = styled.input`
  width: 300px;
  height: 30px;
  border: 0;
  padding: 3px;
  outline: none;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
`;
export const ButtonSearch = styled.button`
  border: 0;
  cursor: pointer;
  background-color: #fff;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
`;

export const ContainerButtonShop = styled.div`
  display: flex;
  .shoppingCartIcon {
    margin-left: 40px;
    cursor: pointer;
  }
`;
