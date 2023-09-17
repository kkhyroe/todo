import { useEffect, useState } from "react";
import { TodoItemProps } from "./types";

export const useStore = () => {
  const [store, setStore] = useState<TodoItemProps[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("store");
    if (data) setStore(JSON.parse(data));
  }, []);

  useEffect(() => {
    if (store.length) localStorage.setItem("store", JSON.stringify(store));
  }, [store]);

  const addToStore = (value: string) =>
    setStore([...store].concat({ text: value, checked: false }));

  const clearStore = () => setStore([]);

  return { store, addToStore, clearStore, setStore };
};
