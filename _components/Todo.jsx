import { Button } from "./Button";

export function Todo(props) {
  const { todo, deletion, clicked } = props;
  return (
    <div className="w-full flex relative my-20">
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={() => clicked(todo.id)}
      />
      <p className="bg-gray-300 p-2 border w-full h-fit">{todo.text}</p>
      <div className="absolute right-0">
        <Button
          givenFunction={() => {
            deletion(todo.id);
          }}
        >
          delete
        </Button>
      </div>
    </div>
  );
}
