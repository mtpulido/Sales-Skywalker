import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getOneBusiness } from "../../services/businesses";
import "./Details.css";

const Details = (props) => {
  const [oneBusiness, setOneBusiness] = useState(null);
  const { id } = useParams();

  const [toDoCall, setToDoCall] = useState({
    user_id: "",
    business_id: "",
    action: "Call",
  });
  const [toDoEmail, setToDoEmail] = useState({
    user_id: "",
    business_id: "",
    action: "Email",
  });

  useEffect(() => {
    const fetchOneBusiness = async () => {
      const businessData = await getOneBusiness(id);
      setOneBusiness(businessData);
    };
    fetchOneBusiness();

    if (props.currentUser) {
      setToDoCall({
        user_id: props.currentUser.id,
        business_id: id,
        action: "Call",
      });
      setToDoEmail({
        user_id: props.currentUser.id,
        business_id: id,
        action: "Email",
      });
    } 
  }, [id, props.currentUser]);

  

  return (
    <div className="details-container">
      <div className="details-businessinfo-container">
        <div className="details-businessinfo">
          <span>Business Name:</span> {oneBusiness?.name}
        </div>
        <div className="details-businessinfo">
          <span>Contact:</span> {oneBusiness?.contact}
        </div>
        <div className="details-businessinfo">
          <span>Phone Number:</span> {oneBusiness?.phone_number}
        </div>
        <div className="details-businessinfo">
          <span>Email:</span> {oneBusiness?.email}
        </div>
        <div className="details-businessinfo">
          <span>Address:</span> {oneBusiness?.address}
        </div>
        <div className="details-businessinfo">
          <span>Industry:</span> {oneBusiness?.industry}
        </div>
        <div className="details-businessinfo">
          <span>Client Status:</span>{" "}
          {oneBusiness?.client_status ? "Is a Client" : "Not a Client"}
        </div>
        <div className="details-businessinfo">
          <span>Sales Revenue:</span> {oneBusiness?.sales_revenue}
        </div>
        <div className="details-businessinfo">
          <span>Sales Rep:</span> {oneBusiness?.user.name}
        </div>
      </div>
      <div className="details-notes-container">
        NOTES:
        <div>{oneBusiness?.notes}</div>
      </div>
      {props.currentUser.id === oneBusiness?.user_id ? <div className="details-buttons-container">
        <div className="details-buttons">Meeting</div>
        <div
          className="details-buttons"
          onClick={() => props.createToDo(toDoCall)}
        >
          Call ToDo
        </div>
        <div
          className="details-buttons"
          onClick={() => props.createToDo(toDoEmail)}
        >
          Email ToDo
        </div>
        <Link to={`/businesses/${id}/edit`}>
          <div className="details-buttons">Edit</div>
        </Link>
        <div className="details-buttons" onClick={() => props.handleDelete(id)}>
          Delete
        </div> 
      </div> : null}
    </div>
  );
};

export default Details;
