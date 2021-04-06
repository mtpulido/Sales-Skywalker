import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getAllBusinesses,
  postBusiness,
  putBusiness,
  destroyBusiness,
} from "../services/businesses";
import {getAllToDos, postToDo, destroyToDo} from "../services/todos"
import Add from "../screens/add/Add";
import Dashboard from "../screens/dashboard/Dashboard";
import Details from "../screens/details/Details";
import Edit from "../screens/edit/Edit";
import Businesses from "../screens/businesses/Businesses";
import Layout from "../layout/Layout"

const MainContainer = (props) => {
  const [allBusinesses, setAllBusinesses] = useState([]);
  const [allToDos, setAllToDos] = useState([])
  const history = useHistory();
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const fetchBusinesses = async () => {
      const businessData = await getAllBusinesses();
      setAllBusinesses(businessData);
    };
    fetchBusinesses();


    if (props.currentUser) {
      const fetchToDos = async () => {
        const toDosData = await getAllToDos()
        setAllToDos(toDosData)
      }
      fetchToDos()
    } else {
     return null
    }
  }, [props.currentUser, toggleFetch]);

  const handleCreate = async (businessData) => {
    const newBusiness = await postBusiness(businessData);
    setAllBusinesses((prevState) => [...prevState, newBusiness]);
    history.push(`/businesses/${newBusiness.id}`);
  };

  const handleUpdate = async (id, businessData) => {
    const updatedBusiness = await putBusiness(id, businessData);
    setAllBusinesses((prevState) =>
      prevState.map((business) => {
        return business.id === Number(id) ? updatedBusiness : business;
      })
    );
    history.push(`/businesses/${id}`);
  };

  const handleDelete = async (id) => {
    await destroyBusiness(id);
    setAllBusinesses((prevState) =>
      prevState.filter((business) => {
        return business.id !== id;
      })
    );
    history.push("/businesses");
  };

  const createToDo = async (toDoData) => {
    const newToDo = await postToDo(toDoData)
    setAllToDos((prevState) => [...prevState, newToDo])
    setToggleFetch((curr) => !curr)
  }

  const deleteToDo = async (id) => {
    await destroyToDo(id)
    setAllToDos((prevState) => 
      prevState.filter((toDo) => {
      return toDo.id !== id
    }))
  }

  return (
    // <Layout currentUser={props.currentUser} handleLogout={props.handleLogout}> 
    <Switch>
      <Route path="/dashboard">
        <Dashboard currentUser={props.currentUser} allToDos={allToDos} deleteToDo={deleteToDo}/>
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
      {props.currentUser ? <Details allBusinesses={allBusinesses} handleDelete={handleDelete} createToDo={createToDo} currentUser={props.currentUser}/> : <div>loading </div> }
      </Route>

      <Route path="/businesses">
        {props.currentUser ? <Businesses allBusinesses={allBusinesses} /> : <div>loading </div> }
      </Route>
      </Switch>
      // </Layout>
  );
};

export default MainContainer;
