import styled from "styled-components";

interface ContainerProps {
  showCart: boolean;
}
export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.showCart ? "0" : "-350px")};
  width: 300px;
  height: 100vw;

  background-color: yellowgreen;
  padding: 1rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);

  transition: right 0.5s;
`;

export const Title = styled.h1``;

export const CartProductList = styled.ul`
  padding: 2rem 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CartProductItem = styled.li``;

export const CartTotal = styled.strong``;
