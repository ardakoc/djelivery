import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faIceCream } from "@fortawesome/free-solid-svg-icons"

export default function DessertIcon(props) {
  return <FontAwesomeIcon icon={faIceCream} style={{color: "#087f5b", width: props.width || "16px", height: "auto",}} />
}