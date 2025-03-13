import { createContext } from "react";

export const ToDoItems = createContext( [
  { todoItems : [],
    OnAdd : () => {},
    OnDelete : () => {}
  }
] );