import { Link } from "react-router-dom";

const Layout = (props) => {
  return (
    <div>
    <div className="navigation-container">
      <div className="navigation-company-user">
        <div>Big Company</div>
        <div>Name</div>
      </div>
      <div className="navigation-dashboard">Dashboard</div>
      <div className="navigation-propsects">Prospects</div>
      <div className="navigation-client">Clients</div>
      <div className="navigation-signout">Sign Out</div>
      </div>
      {props.children}
    </div>
  );
};

export default Layout;
