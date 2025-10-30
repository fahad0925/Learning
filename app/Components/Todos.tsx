import { useQuery } from "@tanstack/react-query";
import React from "react";
import { usePhotos, useTodos, useUsers } from "../queries";

const Todos = () => {
  const { data: todos, isLoading: todosLoading } = useTodos();
  const { data: users, isLoading: usersLoading } = useUsers();
  const { data: photos, isLoading: photosLoading } = usePhotos();

  //   if (!todosLoading) return <div>{todos[0]?.title}</div>;
  if (!photosLoading) return <div>{photos[1]?.title}</div>;
};

export default Todos;
