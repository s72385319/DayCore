import { ways } from "../data";

function WayToTeach({ title, description }) {
  return (
    <li>
      <p className="microchoice">
        <strong>{ title }</strong> {description}
      </p>
    </li>
  )
}

export default function TeachingSection() {
  return (
    <ul className="ways">
      {ways.map(value => <WayToTeach key={value.title} {...value} />)}
    </ul> 
  )
}