import { useContext } from "react";
import { GroupProduct } from "../../components/ui/GroupProduct/GroupProduct";
import LayoutProducts from "../../components/ui/LayoutProducts/LayoutProducts";
import { ProductsContext } from "../../context/ProductsProvider";
import { Loader } from "../../components/ui/Loader/Loader";

export const HomePage = () => {
  const { products, isLoading } = useContext(ProductsContext);

  if (isLoading) return <Loader />;

  return (
    <LayoutProducts type="column">
      {products ? (
        products.map((groups) => (
          <GroupProduct key={groups.id} id={groups.id} groupList={groups} />
        ))
      ) : (
        <div>Ошибка получения данных. Попробуйте позже.</div>
      )}
    </LayoutProducts>
  );
};
