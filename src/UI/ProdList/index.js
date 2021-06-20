import { makeStyles } from "@material-ui/core/styles";
import db from "../../data/db.json";
import FilterDrawer from "./filterDrawer";
import ProductCard from "./productCard";

// stylings for the Navbar via material ui stylings
const useStyles = makeStyles((theme) => ({
  dashboard: {
    display: "flex",
    flexDirection: "row",
  },
  root: {
    flex: 0.8,
    margin: theme.spacing(1),
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    columnGap: 10,
  },
  productImg: {
    marginBottom: theme.spacing(1.2),
    objectFit: "contain",
    height: "25vh",
  },
}));

const ProdListGrid = () => {
  // fetching classes from useStyles()
  const classes = useStyles();
  return (
    <div className={classes.dashboard}>
      <FilterDrawer />
      <div className={classes.root}>
        {db.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProdListGrid;
