import { Provider } from "react-redux";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/header/Header";
import { ProductList } from "./components/productlist/ProductList";
import { store } from "./redux/Store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ProductList />
      <GlobalStyles />
    </Provider>
  );
}

export default App;
