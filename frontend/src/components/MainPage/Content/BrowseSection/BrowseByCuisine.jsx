// Bootstrap Components
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";

// Custom Components
import BurgerIcon from "../../../Icons/Foods/BurgerIcon";
import PizzaIcon from "../../../Icons/Foods/PizzaIcon";
import ChickenIcon from "../../../Icons/Foods/ChickenIcon";
import DessertIcon from "../../../Icons/Foods/DessertIcon";
import SandwichIcon from "../../../Icons/Foods/SandwichIcon";
import CoffeeIcon from "../../../Icons/Foods/CoffeeIcon";
import FoodCard from "./FoodCard";
import Content from "../Content";

export default function BrowseByCuisine() {
  return (
    <Content
      title="Browse By Cuisine"
      description="Discover restaurants by type of meal"
      background="true"
      body={
        <Card.Body>
          <Row>
            <FoodCard food="Burger" icon={<BurgerIcon width="36px" />} />
            <FoodCard food="Pizza" icon={<PizzaIcon width="36px" />} />
            <FoodCard food="Chicken" icon={<ChickenIcon width="36px" />} />
            <FoodCard food="Dessert" icon={<DessertIcon width="36px" />} />
            <FoodCard food="Sandwich" icon={<SandwichIcon width="36px" />} />
            <FoodCard food="Coffee" icon={<CoffeeIcon width="36px" />} />
          </Row>
        </Card.Body>
      }
    />
  );
}
