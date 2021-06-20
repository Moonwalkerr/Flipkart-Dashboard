import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";
import CustomizedInputBase from "./searchInput";

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 7,
    backgroundColor: "#2874f0",
    maxHeight: 41,
    minHeight: 41,
    color: "#fafafafa",
    display: "flex",
  },
  navbarLogo: {
    marginRight: 20,
    fontStyle: "italic",
    fontSize: 22,
    display: "flex",
    flexDirection: "column",
  },
  login: {
    backgroudColor: "#fafafafa",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    marginLeft: 10,
  },
  innerHeading: {
    fontSize: 11,
  },
  plus: {
    color: "yellow",
  },

  dropDown: {
    color: "#fafafafa",
    cursor: "pointer",
    display: "flex",
    fontWeight: "bold",
  },
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <h3 className={classes.navbarLogo}>
        Flipkart
        <div className={classes.innerHeading}>
          Explore <span className={classes.plus}>Plus</span>
        </div>
      </h3>
      <CustomizedInputBase />
      <Button className={classes.login}>Login</Button>
      <Button className={classes.dropDown}>
        More
        <ArrowDropDown />
      </Button>
    </header>
  );
};

export default Nav;
