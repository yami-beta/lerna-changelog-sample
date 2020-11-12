import React, { useState, useCallback } from "react";

type Todo = {
  text: string;
  completed: boolean;
};

type TodoListProps = {};

export const TodoList: React.FC<TodoListProps> = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const appendTodo = useCallback((text: string) => {
    setTodoList((prev) => [...prev, { text, completed: false }]);
  }, []);

  const updateTodo = useCallback((index: number, todo: Todo) => {
    setTodoList((prev) => {
      return [...prev.slice(0, index), todo, ...prev.slice(index + 1)];
    });
  }, []);

  const [draft, setDraft] = useState("");

  return (
    <div>
      <div>
        <input
          type="text"
          value={draft}
          onChange={(event) => setDraft(event.currentTarget.value)}
        />
        <button
          onClick={() => {
            appendTodo(draft);
            setDraft("");
          }}
        >
          追加
        </button>
      </div>
      <ul>
        {todoList.map((todo, i) => (
          <li key={i}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => {
                  updateTodo(i, { ...todo, completed: !todo.completed });
                }}
              />
              {todo.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
