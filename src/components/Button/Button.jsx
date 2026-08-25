import "./Button.css"

export default function Button({ children, onPress, isActive }) {
  console.log("Button Component Render")
  return <button className={isActive ? "btn active" : "btn"} onClick={onPress}>{ children }</button> 
}