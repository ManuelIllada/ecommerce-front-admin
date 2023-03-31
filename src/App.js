import { Routes, Route } from "react-router-dom";
import TableCategories from "./components/Categories/TableCategories";
import TableProducts from "./components/Products/TableProducts";
import TableUsers from "./components/Users/TableUsers";
import CategoryModif from "./components/Categories/CategoryModif";
import CategoryNew from "./components/Categories/CategoryNew";

import "./App.css";
import Panel from "./components/Panel";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Panel />}>
          <Route path="dashboard" element={<Dashboard />} />
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
