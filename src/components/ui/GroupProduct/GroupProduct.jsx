import ProductCard from "../ProductCard/ProductCard";
import styles from "./GroupsProduct.module.scss";
import LayoutProducts from "../LayoutProducts/LayoutProducts";

export const GroupProduct = ({ groupList }) => {
  return (
    <div className={styles["group"]}>
      <h1>{groupList.groupName}</h1>
      <LayoutProducts type="grid">
        {groupList.products.map((product) => (
          <ProductCard
            key={`${product.id}-${product.title}`}
            product={product}
          />
        ))}
      </LayoutProducts>
    </div>
  );
};
