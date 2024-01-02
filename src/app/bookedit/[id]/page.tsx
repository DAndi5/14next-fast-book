'use client'
import BookForm from "@/app/form/BookForm"
import {useRouter} from "next/navigation";
import {useState, useEffect} from "react";

import {GlobalContext} from "../../context/BookProvider";
import {useContext} from "react";


type Props = {
    params: {
        id: string;
    };
};

const editBook = ({params: {id}}: Props) => {
    const {books, dispatch} = useContext(GlobalContext);

    const editingTodo = books.find((task: any) => task.id === id);
    // console.log("1"+editingTodo);

    const router = useRouter();

    const [newBook, setBook] = useState(
        editingTodo ||
        {
            name: "",
            author: "",
            price: "",
            date: new Date().getTime(),
        },
    );

    const handleOnSubmit = (book) => {
        // console.log(book);
        // console.log("2"+editingTodo);
        dispatch({
            type: "EDIT_TODO",
            todo: {
                id: editingTodo.id,
                name: book.name,
                author: book.author,
                date: book.date,
                price: book.price,
            },
        });

        setBook({name: "", author: "", price: "", date: new Date().getTime()});
        router.push("/booklist");
    };

    useEffect(() => {
        setBook(
            editingTodo || {name: "", author: "", date: new Date().getTime(), price: ""}
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

export default editBook
