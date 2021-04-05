import Business from "../../components/business/Business";
import Filter from "../../components/Filter/Filter"
import { useState } from "react"
import "./Businesses.css"
import {Link} from 'react-router-dom'

const Businesses = (props) => {
  const [queriedBusinesses, setQueriedBusinesses] = useState(props.allBusinesses)

  const handleFilter = event => {
    const newQueriedBusinesses = props.allBusinesses.filter(business => business.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setQueriedBusinesses(newQueriedBusinesses)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const businessJSX = queriedBusinesses.map((business, index) => (
    <Business business={business} key={index}/>
  ));


  return (
    <div className="businesses-container">
      <div className="businesses-filter">
      <Filter onSubmit={handleSubmit} onChange={handleFilter} />
      <Link to="/businesses/add"><div className='add-business-button'>+</div></Link>
      </div>
      <div className="businesses-labels">
        <div className='company-label'>Company</div>
        <div className='contact-label'>Contact</div>
        <div className='phonenumber-label'>Phone#</div>
        <div className='email-label'>Email</div>
        <div className='industry-label'>Industry</div>
        <div className='clientstatus-label'>Client</div>
      </div>
      <div>{businessJSX}</div>
    </div>
  );
};

export default Businesses;
