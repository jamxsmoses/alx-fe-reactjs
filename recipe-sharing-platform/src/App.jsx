import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <>
      <div className="app box-border p-5 bg-black content-center justify-items-center">
        <Routes>
          <Route path="" element={<Homepage />} />
          <Route path="/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
