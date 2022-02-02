import {
  ProductImage,
  ProductTitle,
  ProductButtons,
  ProductCard,
} from "../components";
import '../styles/custom-styles.css'

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard 
        product={product}
        className="bg-dark text-white"
        >
          <ProductCard.Image  className="custom-image"/>
          <ProductCard.Title title="Hola Mundo" className="text-bold" />
          <ProductCard.Buttons className="customs-buttons" />
        </ProductCard>
        <ProductCard 
        product={product}
        className="bg-dark text-white"
        >
          <ProductImage className="custom-image" />
          <ProductTitle className="text-bold" />
          <ProductButtons className="customs-buttons" />
        </ProductCard>
        <ProductCard 
        product={product}
        style={{backgroundColor:'#70d1f8'}}
        >
          <ProductImage  />
          <ProductTitle  />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
