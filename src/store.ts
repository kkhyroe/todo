import { useEffect, useState } from "react";
import { TodoItemProps } from "./types";

export const useStore = () => {
  const [store, setStore] = useState<TodoItemProps[]>([]);
  const uniqueId = () => Date.now() * Math.random();

  useEffect(() => {
    const data = localStorage.getItem("store");
    if (data) setStore(JSON.parse(data));
  }, []);

  useEffect(() => {
    if (store.length) localStorage.setItem("store", JSON.stringify(store));
  }, [store]);

  const addToStore = (value: string) =>
    setStore(
      [...store].concat({ id: uniqueId(), text: value, checked: false }),
    );

  const clearCompleted = () =>
    setStore([...store].filter((item) => !item.checked));

  const changeItemState = (id: number) =>
    setStore(
      [...store].map((item) => {
        if (id === item.id) item.checked = !item.checked;
        return item;
      }),
    );

  return { store, addToStore, clearCompleted, setStore, changeItemState };
};
