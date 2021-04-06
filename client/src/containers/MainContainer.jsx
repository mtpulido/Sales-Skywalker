import { Switch, Route, useHistory } from "react-router-dom";
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
  }, [toggleFetch]);

    useEffect(() => {
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
    setToggleFetch((curr) => !curr)
    history.push('/businesses')
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
   
    <Switch>
  
      <Route exact path="/dashboard">
      <Layout currentUser={props.currentUser} handleLogout={props.handleLogout}> 
          <Dashboard currentUser={props.currentUser} allToDos={allToDos} deleteToDo={deleteToDo} />
          </Layout>
        </Route>
        

      <Route path="/businesses/add">
      <Layout currentUser={props.currentUser} handleLogout={props.handleLogout}> 
          <Add handleCreate={handleCreate} />
          </Layout>
      </Route>

      <Route path="/businesses/:id/edit">
      <Layout currentUser={props.currentUser} handleLogout={props.handleLogout}> 
        <Edit allBusinesses={allBusinesses} handleUpdate={handleUpdate} />
        </Layout>
      </Route>

      <Route path="/businesses/:id">
      <Layout currentUser={props.currentUser} handleLogout={props.handleLogout}> 
      {props.currentUser ? <Details allBusinesses={allBusinesses} handleDelete={handleDelete} createToDo={createToDo} currentUser={props.currentUser} setToggleFetch={setToggleFetch}/> : <div>loading </div> }
      </Layout>
      </Route>

      <Route path="/businesses">
      <Layout currentUser={props.currentUser} handleLogout={props.handleLogout}> 
        {props.currentUser ? <Businesses allBusinesses={allBusinesses} /> : <div>loading </div>}
        </Layout>
      </Route>
      </Switch>
      // </Layout>
  );
};

export default MainContainer;
