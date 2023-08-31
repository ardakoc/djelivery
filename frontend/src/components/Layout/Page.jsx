import Container from "react-bootstrap/esm/Container";

export default function Page(props) {
  return (
    <Container className={props.className || "my-5"} style={props.style || { maxWidth: "50%" }}>
      {props.content}
    </Container>
  );
}
