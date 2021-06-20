import { useState, useEffect } from "react";
import { getData } from "../../helpers/functions";

// Data path for db.json , will be used as an argument for getData() helper method
const DATAPATH = "../../data/db.json";

const ProdListGrid = () => {
  // defining data as a piece of state from useState hook that will contain all product lists in future after fetch
  const [data, setData] = useState([]);

  //   fetching data via useEffect hook rendering
  useEffect(() => {
    getData(DATAPATH, setData);
    console.log(data);
  }, [data]);
  return (
    //   Product list comp
    <div className="ProdListGrid">
      {data.length > 0 ? <h1>Data</h1> : <h2>Loading....</h2>}
    </div>
  );
};

export default ProdListGrid;
