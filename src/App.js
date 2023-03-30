import { Routes, Route } from "react-router-dom";
import AdminPanel from "./components/AdminPanel";
import TableCategories from "./components/TableCategories";
import TableProducts from "./components/TableProducts";
import TableUsers from "./components/TableUsers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AdminPanel />}>
          <Route path="/categories" element={<TableCategories />} />
          <Route path="/products" element={<TableProducts />} />
          <Route path="/users" element={<TableUsers />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
