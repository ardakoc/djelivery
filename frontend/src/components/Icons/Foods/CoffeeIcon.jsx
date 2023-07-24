import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMugHot } from "@fortawesome/free-solid-svg-icons"

export default function CoffeeIcon(props) {
  return <FontAwesomeIcon icon={faMugHot} style={{color: "#087f5b", width: props.width || "16px", height: "auto",}} />
}