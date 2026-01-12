
interface TodoItemProp {
  items: { text: string, completed: boolean };
  onDelete: () => void;
  onComplete: () => void;
}

export const TodoItem = ({ items, onDelete, onComplete }: TodoItemProp) => {
  return (
    <>
      <div className="flex gap-4 p-2">
        <li className={`${items.completed === true ? "line-through text-red-500" : ""}`}>
          {items.text}
          < button onClick={onDelete}>Delete Task</button>
          <button onClick={onComplete}>Mark as completed</button>
        </li>
      </div >
    </>
  );
};
