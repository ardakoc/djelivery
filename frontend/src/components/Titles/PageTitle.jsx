export default function PageTitle(props) {
  return (
    <div className={props.className || "mb-5"}>
      <h4
        style={{
          letterSpacing: "-0.3px",
          textDecoration: "uppercase",
          marginBottom: "0",
        }}
      >
        {props.text}
      </h4>
      <p
        style={{ fontSize: "14px", color: "#434343" }}
        className={props.subtextClass}
      >
        {props.subtext}
      </p>
    </div>
  );
}
