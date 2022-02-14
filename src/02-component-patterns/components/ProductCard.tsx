import { createContext, CSSProperties } from "react";

import { useProduct } from "../hooks/useProduct";
import {
  ProductContextProps,
  Product,
  onChangeArgs,
} from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";
import { InitialValues, ProductCardHandlers } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  product: Product;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  children,
  className,
  product,
  style,
  onChange,
  value,
  initialValues,
}: ProductCardProps) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
    useProduct({ onChange, product, value, initialValues });
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.count,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
