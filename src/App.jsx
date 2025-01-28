import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductCard from "./components/ui/ProductCard/ProductCard";

/* 
  FIXME: Images from https://cheboksary.stores-apple.com/
*/

function App() {
  return (
    <main className="wrapper">
      <Header />
      <div className="container">
        <div className="grid">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
