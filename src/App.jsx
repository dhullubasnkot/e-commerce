import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
// import { DiscountPage } from "./components/Centerpage";
import { TemplateSmart } from "./componentsdata/templatesmartdata";
import { TemplateClothes } from "./componentsdata/templateclothes";
import { TemplateShoes } from "./componentsdata/templateShoes";
// import { TemplateCat } from "./componentsdata/categoriesdata";
import { DiscountData } from "./componentsdata/discountpagedata";
import { BlankCardData } from "./componentsdata/whyusdata";
import { DisplayerData } from "./componentsdata/displayerdata";
import { TemplateData } from "./componentsdata/templatedata";
import { CartProvider } from "./context/CardContext";
import { Cart } from "./pages/cart";
import { LoginPage } from "./pages/login";
import { CenterPageData } from "./componentsdata/centerpagedata";
import { CategoriesPage } from "./components/categories";
import { Home } from "./components/home";
import { FurnitureData } from "./componentsdata/templatefurnituredata";
import { MakeupProducts } from "./componentsdata/makeupdata";
// import { FurnitureData } from "./componentsdata/templatefurnituredata";
// import { DiscountData } from "./componentsdata/centerpagedata";

const Cards = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* <MakeupProducts /> */}
                <CenterPageData />
                <CategoriesPage />
                <BlankCardData />
                <TemplateClothes />
                <TemplateShoes />
                <TemplateSmart />
                <DiscountData />
                <DisplayerData />
              </>
            }
          />
          <Route path="/products" element={<TemplateData />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/templateclothes" element={<TemplateClothes />} />
          <Route path="/templateShoes" element={<TemplateShoes />} />
          <Route path="/templatesmartdata" element={<TemplateSmart />} />
          <Route path="/discountpagedata" element={<DiscountData />} />
          <Route path="/templatefurnituredata" element={<FurnitureData />} />
          <Route path="/makeupdata" element={<MakeupProducts />} />

          <Route path="/home" element={<Home />} />
        </Routes>

        <Footer />
      </Router>
    </CartProvider>
  );
};
export default Cards;
