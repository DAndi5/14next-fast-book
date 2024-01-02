'use client'
import BookForm from "../../app/form/BookForm"
import {useRouter} from "next/navigation";
import {useState, useEffect} from "react";
import {useContext} from "react";

import {GlobalContext} from "../context/BookProvider";


const AddBook = () => {

    const {books, dispatch} = useContext(GlobalContext);
    const editingTodo = false;
    const router = useRouter();

    const [newBook, setBook] = useState(
        {
            name: "",
            author: "",
            price: "",
            date: new Date().getTime(),
            status: "To Do"
        },
    );
    // console.log("1");
    // console.log(editingTodo);

    const handleOnSubmit = (book) => {

        if (editingTodo) {
            dispatch({
                type: "EDIT_TODO",
                todo: {
                    // id: editingTodo.id,
                    name: book.name,
                    author: book.author,
                    date: book.date,
                    price: book.price,
                    status: book.status,
                },
            });
            // Reset the editingTodo state in the parent component after editing is done
        } else {
            dispatch({
                type: "ADD_TODO",
                todo: {
                    name: book.name,
                    author: book.author,
                    date: book.date,
                    price: book.price,
                    status: book.status,
                },
            });
        }
        setBook({name: "", author: "", date: new Date().getTime(), price: "", status: "To Do"});
        router.push("/booklist");
    };

    useEffect(() => {
        setBook(
            editingTodo || {name: "", author: "", date: new Date().getTime(), price: "", status: "To Do"}
        );
        // console.log("2" + editingTodo);
        // console.log(editingTodo);
    }, [editingTodo]);


    return (
        <div className="addForm">
            <BookForm book={newBook} handleSubmit={handleOnSubmit}/>
        </div>
    )
}

export default AddBook
