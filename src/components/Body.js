import ShimmerComponent from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RestaurantCard = (prop) => {
  const { cloudinaryImageId, name, costForTwo, cuisines, avgRating } =
    prop.data.card.card.info;
  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="res-img"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const BodyComponent = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [defaultRestList, setDefaultRestList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterBtnName, setFilterBtnName] = useState("Top Rated Restaurants");
  useEffect(() => {
    getRestList();
  }, []);
  const getRestList = async () => {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.957216&lng=80.24188989999999&collection=80478&tags=layout_BAU_Contextual%2Cparotta&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );
      const data = await res.json();
      console.log("data fetched");
      setRestaurantList(data?.data?.cards?.slice(3));
      setDefaultRestList(data?.data?.cards?.slice(3));
    } catch (err) {
      console.log(error);
    }
  };

  return restaurantList.length === 0 ? (
    <ShimmerComponent />
  ) : (
    <div className="body-container">
      <div className="filters-container">
        <div className="search">
          <input
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              setRestaurantList(
                defaultRestList.filter((restaurant) => {
                  return restaurant.card.card.info.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
                })
              );
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              restaurantList.length < defaultRestList.length
                ? setFilterBtnName("Top Rated Restaurants")
                : setFilterBtnName("Show All Restaurants");
              restaurantList.length < defaultRestList.length
                ? setRestaurantList(defaultRestList)
                : setRestaurantList(
                    defaultRestList.filter((restaurant) => {
                      return restaurant?.card?.card?.info?.avgRating >= 4;
                    })
                  );
            }}
          >
            {filterBtnName}
          </button>
        </div>
      </div>

      <div className="res-card-container">
        {restaurantList.map((restaurant) => {
          return (
            <Link
              key={restaurant?.card?.card?.info?.id}
              to={"/restaurants/" + restaurant?.card?.card?.info?.id}
            >
              {" "}
              <RestaurantCard data={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BodyComponent;
