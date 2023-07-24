import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSeedling } from "@fortawesome/free-solid-svg-icons"

export default function SaladIcon(props) {
  return <FontAwesomeIcon icon={faSeedling} style={{color: "#087f5b", width: props.width || "16px", height: "auto",}} />
}