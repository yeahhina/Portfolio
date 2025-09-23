import Layout from "./component/layout/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/layout/home";
import LearnMore from "./component/view/learnMore";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learnMore" element={<LearnMore />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
