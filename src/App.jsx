import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFound/NotFoundPage";
import { HomePage } from "./pages/Home/HomePage";

/* 
  FIXME: Images from https://cheboksary.stores-apple.com/
*/

function App() {
  return (
    <main className="wrapper">
      <Header />
      <div className="container">
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
