import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: navy;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 60px;
`;

export const HeaderTitle = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
`;

export const ButtomWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

interface AuthButtomProps {
  isLogged: boolean;
}
export const AuthButtom = styled.button<AuthButtomProps>`
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 10px;
  background-color: ${(props) => (props.isLogged ? "green" : "red")};
  color: white;

  display: flex;
  align-items: center;
  gap: 0.3rem;

  svg {
    font-size: 1rem;
  }
`;

export const CartButtom = styled.button`
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 10px;
  background-color: violet;
  color: black;

  display: flex;
  align-items: center;
  gap: 0.3rem;
`;
