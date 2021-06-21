import { makeStyles } from "@material-ui/core/styles";
import { Slider } from "@material-ui/core";
import { useContext, useState } from "react";
import { AppContext } from "../../context/context";

// stylings for the Navbar via material ui stylings
const useStyles = makeStyles((theme) => ({
  root: {
    flex: 0.45,
    padding: 20,
  },
}));

const FilterDrawer = () => {
  // fetching classes from useStyles()
  const classes = useStyles();

  // fetching displayData state from Context layer
  const [value, setValue] = useState([100, 100000]);
  const [displayData, setDisplayData] = useContext(AppContext).displayData;
  const [preValue, setPreValue] = useState(value);
  const [nextValue, setNextValue] = useState(null);

  //   slider event change handler
  const handleChange = (evt, newValue) => {
    // setpreValue(value);
    setValue(newValue);
    setNextValue(newValue);
  };

  function sortData(preValue, newValue) {
    displayData.filter((x) => x.Price >= preValue && x.Price <= nextValue);
  }
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
