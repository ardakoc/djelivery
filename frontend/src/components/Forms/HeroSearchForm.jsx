// Bootstrap Components
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";

// Icons
import Location from "../Icons/Location/Location";
import Restaurant from "../Icons/Restaurant";

// Custom Components
import PrimaryButton from "../Buttons/PrimaryButton";
import InputWithIcon from "../InputGroups/InputWithIcon";

export default function HeroSearchForm() {
  return (
    <Form className="mt-4">
      <Col xs="auto">
        <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
          Restaurant Name
        </Form.Label>
        <InputWithIcon icon={<Restaurant />} placeholder="Restaurant name" />
      </Col>
      <Col xs="auto">
        <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
          Location
        </Form.Label>
        <InputWithIcon icon={<Location />} placeholder="Location" />
      </Col>
      <Col xs="auto">
        <PrimaryButton text="SEARCH" />
      </Col>
    </Form>
  );
}
