import { ProductCards } from "../productcards/ProductCards";
import * as S from "./Styles";
import { products } from "../../data/ProductArray";

export const ProductList: React.FC = () => {
  return (
    <S.Container>
      {products.map((product) => (
        <ProductCards key={product.id} product={product} />
      ))}
    </S.Container>
  );
};
