import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";
import CustomizedInputBase from "./searchInput";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: 600,
  },
  login: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    marginLeft: 10,
    // fontWeight: "bold",
  },

  dropDown: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    marginLeft: 10,
    color: "#fafafafa",
    fontWeight: "bold",
  },
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <header className="navbar">
      <h3>
        Flipkart
        <div className="innerHeading">
          Explore <span id="plus">Plus</span>
        </div>
      </h3>
      <CustomizedInputBase />
      <Button variant="contained" className={classes.login}>
        Login
      </Button>
      <Button className={classes.dropDown}>
        More
        <ArrowDropDown />
      </Button>
    </header>
  );
};

export default Nav;
