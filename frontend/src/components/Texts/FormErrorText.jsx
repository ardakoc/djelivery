export default function FormErrorText(props) {
  return (
    <p className="error-text" style={props.style}>
      {props.msg}
    </p>
  );
}
