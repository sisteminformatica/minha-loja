import styled from "styled-components";

export const Container = styled.main`
  max-width: 1240px;
  height: 100%;
  margin: 4rem auto;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 2rem;
  /* & > *  faz parte do SCSS nesse mesmo elemento (Container) que esta sendo estilizado se logo depois dele vier 
qualquer coisa no nosso caso o que vem eh uma TAG article  sera aplicado o estilo flex: 1 300px
flex 1 faz que o item estique o maximo que puder sendo o minimo 300px de largura se ficar menos de 300 quebra o grid
e lea o elemento para liha de baixo so funciona colocando um flex-wrap: wrap*/
  & > * {
    flex: 1 300px;
  }
`;
