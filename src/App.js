import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeaderPanel from "./components/HeaderPanel";
import Routing from "./components/Routing";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";

function App() {
  return (
    <>
      <ProductsProvider>
        <CartProvider>
          <Header />
          <HeaderPanel />
          <Routing />
          <Footer />
        </CartProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
