import styled from "styled-components";

export const Card = styled.article`
  background-color: white;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ProductImage = styled.img`
  width: 250px;
  height: 400px;
  /* object-fit contem a imagem dentro da regiao sem distocer 
  documentaçao google object-ft css*/
  object-fit: contain;
`;

export const ProdurctTitle = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
  min-height: 3rem;
  margin-top: 1rem;
`;

export const ReviewPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

export const Review = styled.span``;

export const Price = styled.strong``;

export const AddToCardButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

export const AddToCardButton = styled.button`
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  background-color: blue;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  /* svg muda o tamnho do icone dentro do button */
  svg {
    font-size: 1rem;
  }
`;

export const RemoveFromCardButtom = styled.button`
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  background-color: violet;
  color: black;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  /* svg muda o tamnho do icone dentro do button */
  svg {
    font-size: 1rem;
  }
`;
