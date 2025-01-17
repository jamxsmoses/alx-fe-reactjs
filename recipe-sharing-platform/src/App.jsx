import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app box-border p-5 bg-black content-center justify-items-center">
          <Routes>
            <Route path="" element={<Homepage />} />
            <Route path="/:id" element={<RecipeDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
