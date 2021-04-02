import { Link } from "react-router-dom"
import "./Business.css"

const Business = (props) => {
  return (
    <>
      <Link className="business-prospects" to={`/businesses/${props.business._id}`}>
        <div className="name-prospects">{props.business.name}</div>
        <div className="contact-prospects">{props.business.contact}</div>
        <div className="phone-prospects">{props.business.phone_number}</div>
        <div className="email-prospects">{props.business.email}</div>
        <div className="industry-prospects">{props.business.industry}</div>
        <div className="isclient-prospects">{props.business.client_status ? "client" : null}</div>
      </Link>  
    </>
  )
}

export default Business