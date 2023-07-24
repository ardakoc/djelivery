import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDrumstickBite } from "@fortawesome/free-solid-svg-icons"

export default function ChickenIcon(props) {
  return <FontAwesomeIcon icon={faDrumstickBite} style={{color: "#087f5b", width: props.width || "16px", height: "auto",}} />
}