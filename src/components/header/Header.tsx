import * as S from "./Style";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { Cart } from "../cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/Root-reducer";

export const Header: React.FC = () => {
  const { user } = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReducer
  );
  
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);
  const isLogged = user !== null;

  function handleUserAuth() {
    if (user === null) {
      dispatch({
        type: "user/login",
        payload: {
          name: "Berim",
          email: "berim@og.com",
        }
      })
    } else {
      dispatch({
        type: "user/logout",
      })
    }
  }

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MinhaLoja.</S.HeaderTitle>

        <S.ButtomWrapper>
          <S.AuthButtom isLogged={isLogged} onClick={handleUserAuth}>
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButtom>
          <S.CartButtom onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart />
          </S.CartButtom>
        </S.ButtomWrapper>
      </S.Wrapper>
      <Cart showCart={showCart} />
    </S.StyledHeader>
  );
};
//baixar ferramenta redux´logger
//yarn add redux-logger não vem com typescript 
// adicionar yarn add -D @types/redux-logger
//importar biblioteca dentro do create-store np Store.ts