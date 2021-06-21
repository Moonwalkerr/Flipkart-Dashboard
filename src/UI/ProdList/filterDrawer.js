import { makeStyles } from "@material-ui/core/styles";
import { Slider } from "@material-ui/core";
import { useContext, useState } from "react";
import { AppContext } from "../../context/context";
import db from "../../data/db.json";
// stylings for the Navbar via material ui stylings
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
  },
}));

const FilterDrawer = () => {
  // fetching classes from useStyles()
  const classes = useStyles();

  // fetching displayData state from Context layer
  const [value, setValue] = useState([100, 100000]);
  const [displayData, setDisplayData] = useContext(AppContext).displayData;

  //   slider event change handler
  const handleChange = (evt, newValue) => {
    setValue(newValue);
    setDisplayData(sortData(newValue[0], newValue[1]));
    console.log(displayData);
  };

  const sortData = (preValue, newValue) =>
    db.filter((data) => data.price >= preValue && data.price <= newValue);
  return (
    <div className={classes.root}>
      <h4>Check via Price Range</h4>
      <Slider
        max={100000}
        min={100}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
    </div>
  );
};

export default FilterDrawer;
