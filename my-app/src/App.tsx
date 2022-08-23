import React, { Fragment, useState } from 'react';

type FormElement = React.FormEvent<HTMLFormElement>;
interface Itask {
  name: string;
  done: boolean;
}

function App() {

  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<Itask[]> ([])

  const handleSubmit = (e: FormElement) =>{
    e.preventDefault();
    addTask(newTask)
    setNewTask('');
  }

  const addTask = (name: string) =>{
    const newTasks: Itask[] = [...tasks, {name, done: false}]
    setTasks(newTasks)
  }

  return (
   <Fragment>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={e => setNewTask(e.target.value)} value={newTask} />
      <button>
        Save
      </button>
    </form>
    {
      tasks.map((t:Itask, i:number) => {
        return <h1 key={i}> {t.name}</h1>
      })
    }
   </Fragment>
  );
}

export default App;
