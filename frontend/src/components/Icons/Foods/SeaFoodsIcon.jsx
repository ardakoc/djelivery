import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFish } from "@fortawesome/free-solid-svg-icons"

export default function SeaFoodsIcon(props) {
  return <FontAwesomeIcon icon={faFish} style={{color: "#087f5b", width: props.width || "16px", height: "auto",}} />
}