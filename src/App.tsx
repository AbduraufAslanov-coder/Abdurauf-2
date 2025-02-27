import { BrowserRouter, Routes, Route } from "react-router";
import React from "react"
import Header from "./components/Header"
import DogGallery from "./components/DogGallery"
import CatGallery from "./components/CatGallery";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index path="DogGallery" element={<DogGallery />} />
        <Route  path="CatGallery" element={<CatGallery />} />
      </Routes>
    </div>
  );
}
export default App