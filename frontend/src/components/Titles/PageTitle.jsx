export default function PageTitle(props) {
  return (
    <div className="mb-5">
      <h4 style={{ letterSpacing: "-0.3px", textDecoration: "uppercase", marginBottom: "0" }}>
        {props.text}
      </h4>
      <p style={{ fontSize: "14px", color: "#434343"}}>{props.subtext}</p>
    </div>
  );
}
