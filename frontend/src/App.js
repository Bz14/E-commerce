import { Navbar } from "./Components/NavBar/Navbar";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route
            path="/women"
            element={<ShopCategory category="women" />}
          ></Route>
          <Route path="/men" element={<ShopCategory category="men" />}></Route>
          <Route
            path="/kids"
            element={<ShopCategory category="kids" />}
          ></Route>
          <Route path="/product" element={<Product />}>
            <Route path=":productID" element={<Product />}></Route>
          </Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<LoginSignup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// rfc
