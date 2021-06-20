import { makeStyles } from "@material-ui/core/styles";
import { Slider } from "@material-ui/core";
import { useState } from "react";

// stylings for the Navbar via material ui stylings
const useStyles = makeStyles((theme) => ({
  root: {
    flex: 0.35,
    padding: 20,
  },
}));

const FilterDrawer = () => {
  // fetching classes from useStyles()
  const classes = useStyles();

  const [value, setValue] = useState([500, 60000]);
  const [preValue, setPreValue] = useState(value);
  const [nextValue, setNextValue] = useState(null);

  //   slider event change handler
  const handleChange = (evt, newValue) => {
    setValue(newValue);
    setNextValue(newValue);
  };

  //   this function returns a valueText for showing on slider
  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <div className={classes.root}>
      <h4>Check via Price Range</h4>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
};

export default FilterDrawer;
