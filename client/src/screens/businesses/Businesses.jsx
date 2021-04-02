import Business from "../../components/business/Business";
import Filter from "../../components/Filter/Filter"
import { useState } from "react"
import "./Businesses.css"

const Businesses = (props) => {
  const [queriedBusinesses, setQueriedBusinesses] = useState([])
  // console.log(queriedBusinesses)
  // console.log(props.allBusinesses)

  // const handleFilter = event => {
  //   const newQueriedBusinesses = props.allBusinesses.filter(business => business.name.toLowerCase().includes(event.target.value.toLowerCase()))
  //   setQueriedBusinesses(newQueriedBusinesses)
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  // }

  const businessJSX = props.allBusinesses.map((business, index) => (
    <Business business={business} key={index} />
  ));


  return (
    <div className="businesses-container">
      {/* <div className="businesses-filter">
      <Filter onSubmit={handleSubmit} onChange={handleFilter} />
      </div> */}
      <div>{businessJSX}</div>
    </div>
  );
};

export default Businesses;
