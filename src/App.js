import { Routes, Route } from "react-router-dom";
import AdminPanel from "./components/AdminPanel";
import TableCategories from "./components/Categories/TableCategories";
import TableProducts from "./components/TableProducts";
import TableUsers from "./components/TableUsers";
import CategoryModif from "./components/Categories/CategoryModif";
import CategoryNew from "./components/Categories/CategoryNew";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminPanel />}>
          <Route path="categories/edit" element={<CategoryModif />} />
          <Route path="categories/create" element={<CategoryNew />} />
          <Route path="categories" element={<TableCategories />} />
          <Route path="products" element={<TableProducts />} />
          <Route path="users" element={<TableUsers />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
