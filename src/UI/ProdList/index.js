import { useState, useEffect } from "react";

const DATAPATH = "../../data/db.json";

const ProdListGrid = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(DATAPATH);
  }, []);
  // return (  );
};

export default ProdListGrid;
