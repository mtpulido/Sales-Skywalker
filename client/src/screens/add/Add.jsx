import { useState } from 'react'
import "./Add.css"

const Add = (props) => {

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    phone_number: '',
    email: '',
    address: '',
    industry: '',
    client_status: 'false',
    notes: '',
    sale_revenue: '',
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  
  return (
    // <div className='add-business-container'></div>
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleCreate(formData);
      
    }}  className='form-add-container'>
      <label className="add-label">
        Company Name:
          <input
          className="add-input"
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required={true}
        />
      </label>
      <label className="add-label">
        Contact:
          <input
          className="add-input"
          type='text'
          name='contact'
          value={formData.contact}
          onChange={handleChange}
          required={true}
        />
      </label>
      <label className="add-label">
        Phone #:
          <input
          className="add-input"
          type='text'
          name='phone_number'
          value={formData.phone_number}
          onChange={handleChange}
          required={true}
        />
      </label>
      <label className="add-label">
        Email:
          <input
          className="add-input"
          type='text'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required={true}
        />
      </label>
      <label className="add-label">
        Address:
          <input
          className="add-input"
          type='text'
          name='address'
          value={formData.address}
          onChange={handleChange}
          required={true}
        />
        </label>
          <label className="add-label">
        Industry:
          <input
          className="add-input"
          type='text'
          name='industry'
          value={formData.industry}
          onChange={handleChange}
          required={true}
        />
        </label>
      <button className="add-button">Submit</button>
    </form>
  )
}

export default Add