import { Link } from "react-router-dom";
import "./Layout.css"

const Layout = (props) => {
  return (
    <div className="layout">
      <div className="navigation-container">
        <div className="navigation-company-user">
          <div>Lots of Sales Inc. </div>
          {props.currentUser ? <div className='nav-name'>  { props.currentUser.name}</div> : null}
        </div>
        <Link to="/dashboard">
          <div className="navigation-dashboard">To Dos</div>
        </Link>
        <Link to="/businesses">
          <div className="navigation-prospects">Prospects</div>
        </Link>
        <div className="navigation-signout" onClick={props.handleLogout}>Sign Out</div>
      </div>
      <div className="layout-children">{props.children}</div>
    </div>
  );
};

export default Layout;
