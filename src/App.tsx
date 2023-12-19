import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item/:id" element={<Product />} />
    </Routes>
  );
};

export default App;
