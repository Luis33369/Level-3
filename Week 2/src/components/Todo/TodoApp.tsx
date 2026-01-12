import { useState } from "react";
import { TodoList } from "./TodoList";

/**
 * Goal
 * Build a basic todo list with state stored in parent and tasks displayed by child components.
 * Components
 *      - TodoApp (parent)
 *      - TodoList (child)
 *      - TodoItem (child)
 * Requirements
 *      - Parent state: tasks (array of strings)
 *      - Input + button adds tasks
 *      - TodoList receives tasks as prop and maps into TodoItem
 *      - Stretch
 *      - Add ability to delete a task:
 *      - Parent passes onDelete(index) to child
 *      - Add ability to mark task complete:
 *      - tasks become objects { text, completed }
 */
interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoApp = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [text, setText] = useState("");
  // const tasks = [];

  // const handleInput = (e: string) => {
  //   setText(e.target.value);
  // }

  const handleTask = () => {
    const formatText = text.trim();

    if (formatText === "") return
    setTasks(tasks => [...tasks, { id: Date.now(), text: formatText, completed: false }])
    setText("");
  }

  const handleDelete = (id: number) => {
    setTasks(currentTasks => currentTasks.filter(task => task.id !== id))
    console.log(tasks);

  };

  const handleComplete = (id: number) => {
    setTasks(currentTasks => currentTasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    console.log(tasks)
  };


  return (
    <>
      <div className="space-y-3">
        <h1>TO DO APP</h1>
        <div className="flex gap-2">
          <input className="border border-white text-xl" type="text" placeholder="Add a Task" value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={handleTask} className="border border-white">Add Task</button>
        </div>
        <TodoList items={tasks} onDelete={handleDelete} onComplete={handleComplete} />
      </div>
    </>
  );
};
