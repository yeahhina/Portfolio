import Layout from "./component/layout/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/layout/home";
import LearnMore from "./component/view/learnMore";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<LearnMore />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
