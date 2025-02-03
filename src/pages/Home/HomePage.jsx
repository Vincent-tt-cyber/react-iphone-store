import { useEffect, useState } from "react";
import { GroupProduct } from "../../components/ui/GroupProduct/GroupProduct";
import LayoutProducts from "../../components/ui/LayoutProducts/LayoutProducts";
import { iphonesData } from "../../data/productsData";

export const HomePage = () => {
  const [productsData, setProductsData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = () => {
    setIsLoading(true);

    setTimeout(() => {
      setProductsData(iphonesData);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <div style={{ textAlign: "center", fontSize: "20px", color: "#f67373" }}>
        Загружаем товары...
      </div>
    );
  }

  return (
    <LayoutProducts type="column">
      {productsData ? (
        productsData.map((groups) => (
          <GroupProduct key={groups.id} id={groups.id} groupList={groups} />
        ))
      ) : (
        <div>Error. Try again</div>
      )}
    </LayoutProducts>
  );
};
