// this function fetches data from any json file, and sets the data to a particular state using setter
export const getData = async (path, setter) => {
  let res = await fetch(path);
  let data = await res.json();
  return setter(data);
};
