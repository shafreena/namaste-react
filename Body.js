 import restaurants from "./restaurants";
 
 const RestaurantCard =(prop)=>{
  const {cloudinaryImageId, name, costForTwo,cuisines,avgRating}=prop.data.card.card.info;
  return (
    <div className="res-card">
       <img  className="res-img" alt="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
    <h3>{name}</h3>
    <h4>{cuisines.join(',')}</h4>
    <h4>{avgRating} stars</h4>
    <h4>{costForTwo}</h4>
    </div>
  );
 }
 const restaurantList = restaurants;
 const BodyComponent = ()=>{
  return (
    <div className="body-container">
      <div className="search">Search</div>
      <div className="res-card-container">
        {restaurantList.map((restaurant)=>{
          return ( <RestaurantCard key={restaurant.card.card.info.id} data={restaurant} />);
        })}
        
      </div>
    </div>
  );
 }
 
 export default BodyComponent;