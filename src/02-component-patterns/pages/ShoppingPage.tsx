import {
  ProductImage,
  ProductTitle,
  ProductButtons,
  ProductCard,
} from "../components";
import "../styles/custom-styles.css";
import { products } from "../../data/products";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        className="bg-dark text-white"
        product={product}
        key={product.id}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ count, isMaxCountReached, maxCount, increaseBy,reset }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
            <button onClick={reset}>RESET</button>
            <button onClick={()=>increaseBy(-2)}>-2</button>
           {!isMaxCountReached&& <button onClick={()=>increaseBy(2)}>+2</button>}
            <span>{count}-{maxCount}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
