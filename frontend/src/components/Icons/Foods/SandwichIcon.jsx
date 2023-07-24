import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHotdog } from "@fortawesome/free-solid-svg-icons"

export default function SandwichIcon(props) {
  return <FontAwesomeIcon icon={faHotdog} style={{color: "#087f5b", width: props.width || "16px", height: "auto",}} />
}