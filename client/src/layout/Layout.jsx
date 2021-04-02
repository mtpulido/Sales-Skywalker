import { Link, Redirect } from "react-router-dom";
import "./Layout.css"

const Layout = (props) => {
  return (
    <div className="layout">
      <div className="navigation-container">
        <div className="navigation-company-user">
          <div>Lots of Sales Inc.</div>
          {props.currentUser ? <div>{props.currentUser.name}</div> : null}
        </div>
        <Link to="/dashboard">
          <div className="navigation-dashboard">Dashboard</div>
        </Link>
        <Link to="/businesses">
          <div className="navigation-propsects">Prospects</div>
        </Link>
        <Link to="/clients">
          <div className="navigation-client">Clients</div>
        </Link>
        <div className="navigation-signout">Sign Out</div>
      </div>
      <div className="layout-children">{props.children}</div>
    </div>
  );
};

export default Layout;
