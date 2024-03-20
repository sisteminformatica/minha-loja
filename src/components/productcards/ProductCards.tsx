import { FiShoppingCart } from "react-icons/fi";
import * as S from "./Style";
import { ProductArray } from "../../data/ProductArray";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/Root-reducer";

//teste envio git
interface ProductCardsProps {
  product: ProductArray;
}

export const ProductCards: React.FC<ProductCardsProps> = ({ product }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

  const dispatch = useDispatch();

  //variavel booleana informa se produto esta no cart
  const isProductOnCart =
    cart.find((productOnCart) => product.id === productOnCart.id) !== undefined;

  function handleAddProductToCart() {
    dispatch({
      type: "cart/add-product",
      payload: product,
    });
  }

  function handleRemoveProductFromCart() {
    dispatch({
      type: "cart/remove-product",
      payload: product,
    });
  }

  return (
    <S.Card>
      <S.ProductImage src={product.image} alt={product.description} />
      <S.ProdurctTitle>{product.title}</S.ProdurctTitle>
      <S.ReviewPriceContainer>
        <S.Review>({product.rating.rate})</S.Review>
        <S.Price>{product.price}</S.Price>
      </S.ReviewPriceContainer>
      <S.AddToCardButtonWrapper>
        {isProductOnCart ? (
          <S.RemoveFromCardButtom onClick={handleRemoveProductFromCart}>
            Remover do Carrinho
            <FiShoppingCart />
          </S.RemoveFromCardButtom>
        ) : (
          <S.AddToCardButton onClick={handleAddProductToCart}>
            Adicionar ao Carrinho
            <FiShoppingCart />
          </S.AddToCardButton>
        )}
      </S.AddToCardButtonWrapper>
    </S.Card>
  );
};
