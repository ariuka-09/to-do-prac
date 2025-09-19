"use client";
import { Button } from "@/_components/Button";
import { Input } from "@/_components/Input";
import { Todo } from "@/_components/Todo";
import Image from "next/image";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Home() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [filterType, setFilterType] = useState("All");
  const addTodo = (bicig) => {
    if (bicig !== "") {
      setTodos([...todos, { text: bicig, checked: false, id: uuidv4() }]);

      console.log(todos);

      setText("");
      setFilterType("All");
    }
  };
  const deletion = (id) => {
    console.log("deletion working");
    const newArray = todos.filter((todo) => {
      if (id !== todo.id) {
        return true;
      }
    });
    setTodos(newArray);
  };

  const clicked = (id) => {
    const newArray = todos.map((todo) => {
      if (id == todo.id) todo.checked = !todo.checked;
      return todo;
    });
    setTodos(newArray);
  };
  const showAll = () => {
    setFilterType("All");
  };
  const showActive = () => {
    setFilterType("Active");
  };
  const showCompleted = () => {
    setFilterType("Completed");
  };
  const filterredTodos = todos.filter((todo) => {
    if (filterType == "All") {
      return true;
    } else if (filterType == "Active") {
      return !todo.checked;
    } else if (filterType == "Completed") {
      return todo.checked;
    }
  });
  const deleteCompleted = () => {
    const newArray = todos.filter((todo) => {
      return todo.checked == false;
    });
    setTodos(newArray);
  };
  const keyboard = (e) => {
    if (e.key == "Enter") {
      addTodo(e.target.value);
    }
  };
  return (
    <div className="flex justify-center mt-20">
      <div className="p-4 w-fit h-fit border-[red] border flex flex-col gap-10">
        <div className="flex gap-4">
          <Input text={text} setText={setText} keyboard={keyboard} />
          <Button
            givenFunction={() => {
              addTodo(text);
              showAll();
            }}
          >
            Add
          </Button>
        </div>
        <div className="flex gap-2">
          <Button filterType={filterType} givenFunction={showAll}>
            All
          </Button>
          <Button filterType={filterType} givenFunction={showActive}>
            Active
          </Button>
          <Button givenFunction={showCompleted} filterType={filterType}>
            Completed
          </Button>
        </div>
        {filterredTodos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              clicked={clicked}
              todo={todo}
              deletion={deletion}
            ></Todo>
          );
        })}
        {filterType == "Completed" ? (
          <Button givenFunction={deleteCompleted}>
            delete completed tasks
          </Button>
        ) : null}
      </div>
    </div>
  );
}
