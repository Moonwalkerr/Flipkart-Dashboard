import Data from "../../data/db.json";

const ProdListGrid = () => {
  return (
    <div className="ProdListGrid">
      {Data.length > 0 ? <h1>Data</h1> : <h2>Loading....</h2>}
    </div>
  );
};

export default ProdListGrid;
