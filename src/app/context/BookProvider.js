'use client'
// import useLocalStorage from "../hooks/useLocalStorage";
import { useLocalStorage } from "react-use";
// import { storeReducer, initialStore, types } from "./storeReducer";
import { booksReducer } from "../reducers/booksReducer";
import { createContext, useReducer, useEffect } from "react";

// import {GlobalContext} from "@/app/context/GlobalContext";
export const GlobalContext = createContext();

const BookProvider = ({ children }) => {
    // const [books, dispatch] = useReducer(storeReducer, []);
    // const [books, setBooks] = useLocalStorage('books', [])

    const [books, dispatch] = useReducer(booksReducer, []);

    const [persistentData, setPersistentData] = useLocalStorage("books", []);

    useEffect(() => {
        if (persistentData) {
            dispatch({ type: "READ", books: persistentData });
        }
    }, []);

    useEffect(() => {
        setPersistentData(books);
    }, [books]);

  return (
      <GlobalContext.Provider value={{books, dispatch}}>
        {children}
      </GlobalContext.Provider>
  )
}

export default BookProvider
