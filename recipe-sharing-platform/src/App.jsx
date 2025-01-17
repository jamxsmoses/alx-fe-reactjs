import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app box-border p-5 bg-black content-center justify-items-center">
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="/:id" element={<RecipeDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
