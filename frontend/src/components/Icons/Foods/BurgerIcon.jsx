import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBurger } from "@fortawesome/free-solid-svg-icons"

export default function BurgerIcon(props) {
  return <FontAwesomeIcon icon={faBurger} style={{color: "#087f5b", width: props.width || "16px", height: "auto",}} />
}