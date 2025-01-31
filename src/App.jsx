import { createContext } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LayoutProducts from "./components/ui/LayoutProducts/LayoutProducts";
import ProductCard from "./components/ui/ProductCard/ProductCard";
import { useState } from "react";
import { GroupProduct } from "./components/ui/GroupProduct/GroupProduct";

/* 
  FIXME: Images from https://cheboksary.stores-apple.com/
*/
export const AppContext = createContext();

function App() {
  const [productsData, setProductsData] = useState([
    {
      id: 1,
      groupName: "iPhone 11 64ГБ",
      products: [
        {
          id: 1,
          title: "iPhone 11",
          imageUrl: [
            "https://cheboksary.stores-apple.com/upload/resize_cache/iblock/f14/450_450_140cd750bba9870f18aada2478b24840a/2h9i7nrbrrmevwsqo7t5h0bfp3sgnmis.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/df6/keau7eo7ln471l9bjwigst5fl02aqaui.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/239/9id2wgtqkdhuxxsppsqh8ri4zl3bzy9z.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/42c/v1h86nfrbwzuk4ss0oib14prnzcase3a.jpg",
          ],
          oldPrice: 48722,
          price: 30890,
          color: "Фиолетовый",
          store: "64ГБ",
        },
        {
          id: 2,
          title: "iPhone 11",
          imageUrl: [
            "https://cheboksary.stores-apple.com/upload/resize_cache/iblock/1ae/450_450_140cd750bba9870f18aada2478b24840a/kjp8t7g92174c7rcmi5i7sl1ek5keskp.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/9f9/djottvyx8s7aijsat5u78jkf81003tsc.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/8a4/8e8aowxwqxhvwoqbydbbfp8x1qwd3ljc.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/b65/3hejp255c11en33xkk6v17vko0hjtvky.jpg",
          ],
          oldPrice: 58975,
          price: 37390,
          color: "Белый",
          store: "64ГБ",
        },
      ],
    },
    {
      id: 2,
      groupName: "iPhone 12 128ГБ",
      products: [
        {
          id: 1,
          title: "iPhone 12",
          imageUrl: [
            "https://cheboksary.stores-apple.com/upload/iblock/c92/r0d5o43by3uzqe98rykmzq0fdfbs00ym.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/268/8im7wdfpibu0iflqppafuvsypu3xb0vc.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/6ab/sy8of9c2ufl95bxqvdmddali7set3oys.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/cc2/7chbelmk0ygsqp8y2jkmux1ygpl2jt40.jpg",
          ],
          oldPrice: 65284,
          price: 41390,
          color: "Зеленый",
          store: "128ГБ",
        },
        {
          id: 2,
          title: "iPhone 12",
          imageUrl: [
            "https://cheboksary.stores-apple.com/upload/resize_cache/iblock/9b6/450_450_140cd750bba9870f18aada2478b24840a/l39qq06rhs6oqbd6lhaj81pp3qge7817.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/c0f/nzhctdzvxsylp8zxjt1aln1d52dsd0z4.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/27b/947xbjo5l38kugnkjqtx1kaidbru41cc.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/8c5/t5eag2184qa7vwqaabtxar383labhs32.jpg",
          ],
          oldPrice: 66861,
          price: 42390,
          color: "Красный",
          store: "128ГБ",
        },
        {
          id: 1,
          title: "iPhone 12",
          imageUrl: [
            "https://cheboksary.stores-apple.com/upload/iblock/c92/r0d5o43by3uzqe98rykmzq0fdfbs00ym.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/268/8im7wdfpibu0iflqppafuvsypu3xb0vc.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/6ab/sy8of9c2ufl95bxqvdmddali7set3oys.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/cc2/7chbelmk0ygsqp8y2jkmux1ygpl2jt40.jpg",
          ],
          oldPrice: 65284,
          price: 41390,
          color: "Зеленый",
          store: "128ГБ",
        },
        {
          id: 2,
          title: "iPhone 12",
          imageUrl: [
            "https://cheboksary.stores-apple.com/upload/resize_cache/iblock/9b6/450_450_140cd750bba9870f18aada2478b24840a/l39qq06rhs6oqbd6lhaj81pp3qge7817.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/c0f/nzhctdzvxsylp8zxjt1aln1d52dsd0z4.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/27b/947xbjo5l38kugnkjqtx1kaidbru41cc.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/8c5/t5eag2184qa7vwqaabtxar383labhs32.jpg",
          ],
          oldPrice: 66861,
          price: 42390,
          color: "Красный",
          store: "128ГБ",
        },
      ],
    },
  ]);

  return (
    <main className="wrapper">
      <Header />
      <LayoutProducts>
        {productsData.map((groups) => (
          <GroupProduct id={groups.id}  groupList={groups}/>
        ))}
      </LayoutProducts>
      <Footer />
    </main>
  );
}

export default App;
