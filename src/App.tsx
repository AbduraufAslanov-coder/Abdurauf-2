import { BrowserRouter, Routes, Route } from "react-router";
import React from "react"
import Header from "./components/Header"
import DogGallery from "./components/DogGallery"
import CatGallery from "./components/CatGallery";
import Footer from "./components/Footter";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<DogGallery />} />
        <Route path="DogGallery" element={<DogGallery />} />
        <Route  path="CatGallery" element={<CatGallery />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App