import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import restaurants from "../details/restaurant";
import dishes from "../details/dishes"; // ✅ Import dishes array
import RestaurantCard from "../components/RestaurantCard";

export default function Home() {
  // Use first 5 dishes as popular images for carousel
  const dishImages = dishes.slice(0, 7).map((dish) => ({
    src: dish.image,
    alt: dish.name,
  }));

  return (
    <>
      <Navbar />
      <div className="container">

        <Carousel images={dishImages} />

        <h2>Restaurants with online food delivery in Coimbatore</h2>
        <div className="restaurant-list">
          {restaurants.map((res) => (
            <RestaurantCard key={res.id} restaurant={res} />
          ))}
        </div>
      </div>
    </>
  );
}
