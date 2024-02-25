import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "../constants";

const useRestaurantMenu = (resId) => {
  useEffect(() => {
    fetchMenu();
  }, []);
  const [resInfo, setResInfo] = useState(null);

  const fetchMenu = async () => {
    let res = await fetch(RESTAURANT_URL + resId);
    let json = await res.json();
    setResInfo(json);
  };
  return resInfo;
};

export default useRestaurantMenu;
