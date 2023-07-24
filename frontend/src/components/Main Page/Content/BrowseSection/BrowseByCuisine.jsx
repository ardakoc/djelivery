// Bootstrap Components
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";

// Custom Components
import BurgerIcon from "../../../Icons/Foods/BurgerIcon";
import PizzaIcon from "../../../Icons/Foods/PizzaIcon";
import ChickenIcon from "../../../Icons/Foods/ChickenIcon";
import DessertIcon from "../../../Icons/Foods/DessertIcon";
import SandwichIcon from "../../../Icons/Foods/SandwichIcon";
import CoffeeIcon from "../../../Icons/Foods/CoffeeIcon";
import FoodCard from "./FoodCard";

export default function BrowseByCuisine() {
  return (
    <div className="page-section">
      <Container className="pt-5 b-5">
        <Row>
          <Col>
            <h2>Browse by Cuisine</h2>
            <p>Discover restaurants by type of meal</p>
          </Col>
          <Card>
            <Card.Body>
              <Row>
                <FoodCard food="Burger" icon={<BurgerIcon width="36px" />} />
                <FoodCard food="Pizza" icon={<PizzaIcon width="36px" />}/>
                <FoodCard food="Chicken" icon={<ChickenIcon width="36px" />}/>
                <FoodCard food="Dessert" icon={<DessertIcon width="36px" />}/>
                <FoodCard food="Sandwich"icon={<SandwichIcon width="36px" />}/>
                <FoodCard food="Coffee" icon={<CoffeeIcon width="36px" />}/>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}
