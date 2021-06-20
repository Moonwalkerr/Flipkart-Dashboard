export const getData = async (path, setter) => {
  let res = await fetch(path);
  let data = await res.json();
  return setter(data);
};
