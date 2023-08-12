export default function FormSectionTitle(props) {
  return (
    <div className="my-4">
      <h5
        className="mb-2"
        style={{
          letterSpacing: "-0.3px",
          marginBottom: "0",
        }}
      >
        {props.text}
      </h5>
      <hr className="hr" />
    </div>
  );
}
