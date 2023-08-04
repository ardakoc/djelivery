// Bootstrap Components
import InputGroup from "react-bootstrap/InputGroup";

// Custom Components
import BlockButton from "../Buttons/BlockButton";

export default function LoginWithButton(props) {
  return (
    <BlockButton
      style={{ background: props.backgroundColor, border: "none", padding: "2px 0" }}
      className="mb-2"
      text={
        <InputGroup>
          <InputGroup.Text
            style={{
              background: props.backgroundColor,
              border: "none",
            }}
          >
            {props.appIcon}
          </InputGroup.Text>
          <InputGroup.Text
            style={{
              background: props.backgroundColor,
              color: props.color,
              border: "none",
              borderLeft: `1px solid ${props.color}`,
              fontWeight: "500",
              fontSize: "14px"
            }}
          >
            Sign in with {props.appName}
          </InputGroup.Text>
        </InputGroup>
      }
    ></BlockButton>
  );
}
