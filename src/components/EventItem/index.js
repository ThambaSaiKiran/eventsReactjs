// Write your code here
import './index.css'

const EventItem = props => {
  const {item, eventFunc} = props
  const {id, imageUrl, name, location} = item
  const changeFunc = () => {
    eventFunc(id)
  }
  return (
    <li className="eventItem">
      <button type="button" onClick={changeFunc}>
        <img src={imageUrl} alt="event" className="eventImg" />
      </button>
      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
