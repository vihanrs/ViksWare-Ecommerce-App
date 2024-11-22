import ProductCard from "./ProductCard";

function ProductCards({ products }) {
  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {products.map((product) => {
        return (
          <ProductCard
            key={product._id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
          />
        );
      })}
    </div>
  );
}

export default ProductCards;