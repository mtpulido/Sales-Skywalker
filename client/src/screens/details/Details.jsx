import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneBusiness } from "../../services/businesses";
import "./Details.css";

const Details = (props) => {
  const [oneBusiness, setOneBusiness] = useState(null);
  const { id } = useParams();
  console.log(oneBusiness);

  useEffect(() => {
    const fetchOneBusiness = async () => {
      const businessData = await getOneBusiness(id);
      setOneBusiness(businessData);
    };
    fetchOneBusiness();
  }, []);

  return (
    <div className="details-container">
      <div className="details-businessinfo-container">
        <div className="details-businessinfo"><span>Business Name:</span> {oneBusiness?.name}</div>
        <div className="details-businessinfo"><span>Contact:</span> {oneBusiness?.contact}</div>
        <div className="details-businessinfo"><span>Phone Number:</span> {oneBusiness?.phone_number}</div>
        <div className="details-businessinfo"><span>Email:</span> {oneBusiness?.email}</div>
        <div className="details-businessinfo"><span>Address:</span> {oneBusiness?.address}</div>
        <div className="details-businessinfo"><span>Industry:</span> {oneBusiness?.industry}</div>
        <div className="details-businessinfo"><span>Client Status:</span> {oneBusiness?.client_status ? "Is a Client" : "Not a Client"}</div>
        <div className="details-businessinfo"><span>Sales Revenue:</span> {oneBusiness?.sales_revenue}</div>
        <div className="details-businessinfo"><span>Sales Rep:</span> {oneBusiness?.user.name }</div>
      </div>
      <div className="details-notes-container">NOTES:
      <div>{oneBusiness?.notes}</div>
      </div>
      <div className="details-buttons-container">
        <div className="details-buttons">Meeting</div>
        <div className="details-buttons">Call ToDo</div>
        <div className="details-buttons">Email ToDo</div>
        <div className="details-buttons">Edit</div>
        <div className="details-buttons">Delete</div>
      </div>
    </div>
  );
};

export default Details;
