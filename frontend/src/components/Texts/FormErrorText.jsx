export default function FormErrorText(props) {
  return (
    <p className={props.className || "error-text"} style={props.style}>
      {props.msg}
    </p>
  );
}
