'use client'
import { useContext } from "react";
import Book from "./Book";
import {GlobalContext} from "../context/BookProvider";

import CardHeader from "./CardHeader";

const ListBook = () => {
    const { books, dispatch } = useContext(GlobalContext);

    const handleRemoveBook = (id) => {
        dispatch({ type: "REMOVE_TODO", id });
    };

    const handleChangeStatus = (id, status) => {
        dispatch({ type: "CHANGE_STATUS", id, status });
        // console.log(id, status)
    };

    return (
        <>
        <CardHeader dispatch={dispatch}/>
        <div className="listBook">
            {books.length ? books.map((book, i) => (
                <Book book={book} i={i} key={i} handleRemoveBook={handleRemoveBook} handleChangeStatus={handleChangeStatus}/>
            )) : (
                <p className="noData">No books avaliable, Please add some book!</p>
            )}
        </div>
        </>
    )
}

export default ListBook
