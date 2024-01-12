import React, { useEffect, useState } from "react";

export const useTodos = () => {
  const [page, setPage] = useState(1);
  const [todos, setTodos] = useState([]);
  const lastPage = 20;

  useEffect(() => {
    const fetchTodos = async () => {
      const url = `https://jsonplaceholder.typicode.com/todos?_page=${page}`;

      const response = await fetch(url);

      const todos = await response.json();

      setTodos(todos);
    };
    fetchTodos();
  }, [page]);

  return { page, todos, setPage, lastPage };
};
