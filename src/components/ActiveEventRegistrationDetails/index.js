// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {activeStatus} = props
  const yetToRegister = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="img"
      />
      <p>A live performance brings so much to your relationship with dance</p>
      <button type="button">Register Here</button>
    </div>
  )
  const registered = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="img"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )
  const registerClosed = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="img"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
    </div>
  )
  const renderStatus = () => {
    switch (activeStatus) {
      case 'YET_TO_REGISTER':
        return yetToRegister()
      case 'REGISTERED':
        return registered()
      case 'REGISTRATIONS_CLOSED':
        return registerClosed()
      default:
        return null
    }
  }
  return <div>{renderStatus(activeStatus)}</div>
}
export default ActiveEventRegistrationDetails
