import { useState } from "react";
import { GroupProduct } from "../../components/ui/GroupProduct/GroupProduct";
import LayoutProducts from "../../components/ui/LayoutProducts/LayoutProducts";

export const HomePage = () => {
  const [productsData, setProductsData] = useState([
    {
      id: 1,
      groupName: "Apple iPhone 11 64ГБ",
      products: [
        {
          id: 1,
          title: "Apple iPhone 11",
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
          title: "Apple iPhone 11",
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
        {
          id: 2,
          title: "Apple iPhone 11",
          imageUrl: [
            "https://cheboksary.stores-apple.com/upload/resize_cache/iblock/156/450_450_140cd750bba9870f18aada2478b24840a/ckugwn9z2r1yakl793pofb7ubdmui56a.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/6bd/tlwhf7omu4gmwgsmxrdy33o6zj5uwfbu.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/8c4/zzgcntwwa69213yrx84svqwu35d2w583.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/926/j7oc69zxuxrzr28wzl6zp944vtyar1u9.jpg",
          ],
          oldPrice: 51877,
          price: 32890,
          color: "Желтый",
          store: "64ГБ",
        },
      ],
    },
    {
      id: 2,
      groupName: "Apple iPhone 12 128ГБ",
      products: [
        {
          id: 1,
          title: "Apple iPhone 12",
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
          title: "Apple iPhone 12",
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
          id: 3,
          title: "Apple iPhone 12",
          imageUrl: [
            "https://cheboksary.stores-apple.com/upload/resize_cache/iblock/195/450_450_140cd750bba9870f18aada2478b24840a/hkol029c2uo4sok5rxktja684cjc3d6i.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/869/79q7vyk1aup3ldplufdai5if7f4yhefd.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/871/3iago3k2hq2507phvoo5hfzuyq050qqh.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/7c0/v1d4xcwqo06m2beh7f5ucgl1nsebs71q.jpg",
          ],
          oldPrice: 65284,
          price: 41390,
          color: "Белый",
          store: "128ГБ",
        },
        {
          id: 4,
          title: "Apple iPhone 12",
          imageUrl: [
            "https://cheboksary.stores-apple.com/upload/resize_cache/iblock/e2b/450_450_140cd750bba9870f18aada2478b24840a/c0xzrs75vign4r0l1szm88q08oogv57s.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/00a/17wshz6ojahq8yvd4w3tfs8jjwdbx3k0.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/54c/v10w6lh1ezueege21hzn7e8kwr0zej59.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/f10/e1siiz6shx9kqzvhjfyyb5l3t1ytl8vj.jpg",
          ],
          oldPrice: 66861,
          price: 42390,
          color: "Синий",
          store: "128ГБ",
        },
        {
          id: 5,
          title: "Apple iPhone 12",
          imageUrl: [
            "https://cheboksary.stores-apple.com/upload/resize_cache/iblock/b48/450_450_140cd750bba9870f18aada2478b24840a/o67x4so94pwry6hi4z2w7aa2f2zqwk66.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/de4/7ud54w4foct0k1bjjaiid4p7c6m0bwn5.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/ca1/2gkkgo6h71jsz51f6k312gwzrfbs89nh.jpg",
            "https://cheboksary.stores-apple.com/upload/iblock/94a/jedll1oyfcm12roglmw1gr2zy3wlsfbr.jpg",
          ],
          oldPrice: 77114,
          price: 48890,
          color: "Синий",
          store: "128ГБ",
        },
      ],
    },
  ]);
  return (
    <LayoutProducts type="column">
      {productsData.map((groups) => (
        <GroupProduct key={groups.id} id={groups.id} groupList={groups} />
      ))}
    </LayoutProducts>
  );
};
