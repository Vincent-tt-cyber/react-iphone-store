// import { createContext } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFound/NotFoundPage";
import { HomePage } from "./pages/Home/HomePage";

/* 
  FIXME: Images from https://cheboksary.stores-apple.com/
*/
// export const AppContext = createContext();

function App() {
  return (
    <main className="wrapper">
      <Header />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
