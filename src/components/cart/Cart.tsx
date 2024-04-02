import { useSelector } from "react-redux";
import * as S from "./Style";
import { RootReducer } from "../../redux/Root-reducer";

interface CartProps {
  showCart: boolean;
}
export const Cart: React.FC<CartProps> = ({ showCart }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

  const total = cart.reduce((totalCart, product) => {
    return totalCart;
  }, 0);

  return (
    <S.Container showCart={showCart}>
      <S.Title>Carrinho</S.Title>
      <S.CartProductList>
        {cart.map((product) => (
          <S.CartProductItem key={product.id}>
            <strong>{product.title}</strong> - ${product.price}
          </S.CartProductItem>
        ))}
      </S.CartProductList>
      <S.CartTotal>Total: $0</S.CartTotal>
    </S.Container>
  );
};
