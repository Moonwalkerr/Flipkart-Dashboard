import db from "../../data/db.json";
import ProductCard from "./productCard";

const ProdListGrid = () => {
  return (
    <div className="ProdListGrid">
      {db.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
};

export default ProdListGrid;
