import Container from "react-bootstrap/esm/Container";

export default function Page(props) {
  return (
    <Container className="my-5" style={{ maxWidth: "50%" }}>
      {props.content}
    </Container>
  );
}
