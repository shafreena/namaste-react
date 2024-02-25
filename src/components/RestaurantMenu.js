import { useParams } from "react-router-dom";
import ShimmerComponent from "./Shimmer";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerComponent />;
  const { name, costForTwo, cuisines, avgRating } =
    resInfo.data.cards[2].card.card.info;
  const { itemCards } =
    resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  return (
    <div>
      <h2>{name}</h2>
      <p>{cuisines.join(",")}</p>
      <p>
        Rs.{costForTwo / 100} for two - {avgRating} stars
      </p>

      <h2>MENU</h2>
      {itemCards.map((item) => {
        return (
          <p key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs.{item?.card?.info?.price / 100}
          </p>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
