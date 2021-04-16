import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Edit.css";

const Edit = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    phone_number: "",
    email: "",
    address: "",
    industry: "",
    client_status: "",
    notes: "",
    sale_revenue: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const businessEdit = props.allBusinesses.find(
        (business) => business.id === Number(id)
      );
      setFormData({
        name: businessEdit.name,
        contact: businessEdit.contact,
        phone_number: businessEdit.phone_number,
        email: businessEdit.email,
        address: businessEdit.address,
        industry: businessEdit.industry,
        client_status: businessEdit.client_status,
        notes: businessEdit.notes,
        sale_revenue: businessEdit.sales_revenue,
      });
    };
    if (props.allBusinesses.length) {
      prefillFormData();
    }
  }, [props.allBusinesses, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.handleUpdate(id, formData);
      }}
      className="form-edit-container"
    >
      <div className="form-details-container">
        <label className="edit-label">
          Company Name:
          <input
            className="edit-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required={true}
          />
        </label>
        <label className="edit-label">
          Contact:
          <input
            className="edit-input"
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required={true}
          />
        </label>
        <label className="edit-label">
          Phone #:
          <input
            className="edit-input"
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required={true}
          />
        </label>
        <label className="edit-label">
          Email:
          <input
            className="edit-input"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required={true}
          />
        </label>
        <label className="edit-label">
          Address:
          <input
            className="edit-input"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required={true}
          />
        </label>
        <label className="edit-label">
          Industry:
          <input
            className="edit-input"
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            required={true}
          />
        </label>
      </div>
      <div className="notes-container-edit">
        <div className="notes-edit-label">
          Notes:
          </div>
          <textarea
            className="edit-notes-input"
            type="text"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
      </div>
      <div className="edit-button-container"><button className="add-button">Submit</button></div>
    </form>
  );
};

export default Edit;
