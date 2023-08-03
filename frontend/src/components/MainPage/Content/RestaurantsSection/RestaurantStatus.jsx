export default function RestaurantStatus(props) {
  return (
    <span
      className={`restaurant-status ${props.open && "open"} ${
        props.close && "close"
      }`}
    >
      <em className="bookmark-ribbon"></em>
      {props.open && "Open"}
      {props.close && "Close"}
    </span>
  );
}
