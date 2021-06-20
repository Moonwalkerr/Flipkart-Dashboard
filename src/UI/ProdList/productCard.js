import { makeStyles } from "@material-ui/core/styles";

// stylings for the Navbar via material ui stylings
const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
    padding: 15,
    display: "flex",
    flexDirection: "column",
    minHeight: "38vh",
    maxHeight: "38vh",
    width: "38vw",
    boxShadow: "1px 2px 2px 4px rgba(0,0,0,0.2)",
  },
  productImg: {
    objectFit: "contain",
    height: "25vh",
  },
}));

const ProductCard = ({ product }) => {
  // fetching classes from useStyles()
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.productImg} src={product.imageURL} alt="" />
      <h2>{product.name}</h2>
      <span className="price"> ₹ {product.price}</span>
    </div>
  );
};

export default ProductCard;
