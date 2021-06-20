import { useState, useEffect } from "react";
import { getData } from "../../helpers/functions";

const DATAPATH = "../../data/db.json";

const ProdListGrid = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(DATAPATH, setData);
  }, []);
  return (
    <div className="ProdListGrid">
      {data.length > 0 ? <h1>Data</h1> : <h2>Loading....</h2>}
    </div>
  );
};

export default ProdListGrid;
