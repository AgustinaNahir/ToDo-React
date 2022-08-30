import React, { Fragment, useState } from "react";

type FormElement = React.FormEvent<HTMLFormElement>;
interface Itask {
  name: string;
  done: boolean;
}

function App() {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<Itask[]>([]);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
  };

  const addTask = (name: string) => {
    const newTasks: Itask[] = [...tasks, { name, done: false }];
    setTasks(newTasks);
  };

  return (
    <Fragment>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    onChange={(e) => setNewTask(e.target.value)}
                    value={newTask}
                    className="form-control" autoFocus
                  />
                  <button className="btn btn-success btn-block mt-2">Save</button>
                </form>
              </div>
            </div>

            {tasks.map((t: Itask, i: number) => (
             <div className="card card-body mt-2" key={i}>
              <h2 style={{textDecoration: t.done ? 'line-through' : ''}}>{t.name}</h2>
              
             </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
