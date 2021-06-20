import db from "../../data/db.json";

const ProdListGrid = () => {
  return <div className="ProdListGrid">{db.map((d) => console.log(d))}</div>;
};

export default ProdListGrid;
