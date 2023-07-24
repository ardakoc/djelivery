import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLeaf } from "@fortawesome/free-solid-svg-icons"

export default function VegetarianIcon(props) {
  return <FontAwesomeIcon icon={faLeaf} style={{color: "#087f5b", width: props.width || "16px", height: "auto",}} />
}