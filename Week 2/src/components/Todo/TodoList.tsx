import { TodoItem } from "./TodoItem"

interface TodoListProp {
  items: string[];
  onDelete: (index: number) => void;
  onComplete: (index: number) => void;
}

export const TodoList = ({ items, onDelete, onComplete }: TodoListProp) => {
  return (
    <>
      <ul>
        {items.map((item) => {
          return <TodoItem key={item.id} items={item} onDelete={() => onDelete(item.id)} onComplete={() => onComplete(item.id)} />
        })}
      </ul>
    </>
  );
};
