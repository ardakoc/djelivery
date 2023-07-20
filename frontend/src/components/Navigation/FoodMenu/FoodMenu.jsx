// Icons
import BurgerIcon from "../../Icons/Foods/BurgerIcon";
import PizzaIcon from "../../Icons/Foods/PizzaIcon";
import ChickenIcon from "../../Icons/Foods/ChickenIcon";
import DessertIcon from "../../Icons/Foods/DessertIcon";
import SandwichIcon from "../../Icons/Foods/SandwichIcon";
import CoffeeIcon from "../../Icons/Foods/CoffeeIcon";
import VegetarianIcon from "../../Icons/Foods/VegetarianIcon";
import SaladIcon from "../../Icons/Foods/SaladIcon";
import SeaFoodsIcon from "../../Icons/Foods/SeaFoodsIcon";

// Custom Components
import FoodMenuItem from "./FoodMenuItem";


export default function FoodMenu() {
  return (
    <>
      <FoodMenuItem icon={<BurgerIcon />} text="Burger" />
      <FoodMenuItem icon={<PizzaIcon />} text="Pizza" />
      <FoodMenuItem icon={<ChickenIcon />} text="Chicken" />
      <FoodMenuItem icon={<DessertIcon />} text="Dessert" />
      <FoodMenuItem icon={<SandwichIcon />} text="Sandwich" />
      <FoodMenuItem icon={<CoffeeIcon />} text="Coffee" />
      <FoodMenuItem icon={<VegetarianIcon />} text="Vegetarian" />
      <FoodMenuItem icon={<SaladIcon />} text="Salad" />
      <FoodMenuItem icon={<SeaFoodsIcon />} text="Sea Foods" />
    </>
  )
}