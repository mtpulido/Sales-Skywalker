import "./Dashboard.css";

const Dashboard = (props) => {
  console.log(props.allToDos);
  const toDoJSX = props.allToDos.map((toDo) => (
    <div className="each-todo">
      <div className="todo-action">{toDo.action}</div>
      <div className="todo-business-info-container">
        <div className="todo-business-name">{toDo.business.name},</div>
        <div className="todo-contact-info">
          {toDo.action === "Call"
            ? toDo.business.phone_number
            : toDo.business.email}
        </div>
      </div>
      <div className="delete-todo" onClick={() => props.deleteToDo(toDo.id)}>
        X
      </div>
    </div>
  ));

  return (
    <div className="dashboard-container">
      <div className="todo-container">
        <div className="to-do-container-label">To Do:</div>
        {toDoJSX}
      </div>
    </div>
  );
};

export default Dashboard;
