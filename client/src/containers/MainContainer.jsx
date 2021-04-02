import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getAllBusinesses,
  postBusiness,
  putBusiness,
  destroyBusiness,
} from "../services/businesses";
import Add from "../screens/add/Add";
import Clients from "../screens/clients/Clients";
import Dashboard from "../screens/dashboard/Dashboard";
import Details from "../screens/details/Details";
import Edit from "../screens/edit/Edit";
import Businesses from "../screens/businesses/Businesses";

const MainContainer = (props) => {
  const [allBusinesses, setAllBusinesses] = useState([]);
  // const [queriedBusinesses, setQueriedSongs] = useState([])
  // const [clients, setClients] = useState([])
  const history = useHistory();

  useEffect(() => {
    const fetchBusinesses = async () => {
      const businessData = await getAllBusinesses();
      setAllBusinesses(businessData);
    };
    fetchBusinesses();
  }, []);

  const handleCreate = async (businessData) => {
    const newBusiness = await postBusiness(businessData);
    setAllBusinesses((prevState) => [...prevState, newBusiness]);
    history.push(`/businesses/:${newBusiness.id}`);
  };

  const handleUpdate = async (id, businessData) => {
    const updatedBusiness = await putBusiness(id, businessData);
    setAllBusinesses((prevState) =>
      prevState.map((business) => {
        return business.id === Number(id) ? updatedBusiness : business;
      })
    );
    history.push(`/businesses/:${id}`);
  };

  const handleDelete = async (id) => {
    await destroyBusiness(id);
    setAllBusinesses((prevState) =>
      prevState.filter((business) => {
        return business.id !== id;
      })
    );
    history.push("/prospects");
  };

  return (
    <Switch>
      <Route path="/dashboard">
        <Dashboard currentUser={props.currentUser} />
      </Route>

      <Route path="/clients">
        <Clients currentUser={props.currentUser} />
      </Route>
      
      <Route path="/businesses/add">
        <Add handleCreate={handleCreate} />
      </Route>

      <Route path="/businesses/:id/edit">
        <Edit allBusinesses={allBusinesses} handleUpdate={handleUpdate} />
      </Route>

      <Route path="/businesses/:id">
        <Details allBusinesses={allBusinesses} handleDelete={handleDelete} />
      </Route>

      <Route path="/businesses">
        <Businesses allBusinesses={allBusinesses} />
      </Route>
    </Switch>
  );
};

export default MainContainer;
