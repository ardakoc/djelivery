import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons"

export default function PizzaIcon(props) {
  return <FontAwesomeIcon icon={faPizzaSlice} style={{color: "#087f5b", width: props.width || "16px", height: "auto",}} />
}