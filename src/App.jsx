import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LayoutProducts from "./components/ui/LayoutProducts/LayoutProducts";
import ProductCard from "./components/ui/ProductCard/ProductCard";

/* 
  FIXME: Images from https://cheboksary.stores-apple.com/
*/

function App() {
  return (
    <main className="wrapper">
      <Header />
      <LayoutProducts>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </LayoutProducts>
      <Footer />
    </main>
  );
}

export default App;
