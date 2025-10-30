import { useQuery } from "@tanstack/react-query";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/todos`);
      return response.json();
    },
  });
};

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/users`);
      return response.json();
    },
  });
};

export const usePhotos = () => {
  return useQuery({
    queryKey: ["photos"],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/photos`);
      return response.json();
    },
  });
};
