import Link from "next/link";
import {useRouter} from "next/navigation";

// import {GlobalContext} from "../context/GlobalContext";
import {STATUS_DONE, STATUS_IN_PROGRESS} from "../constants/statuses";
import { AiOutlineCheck, AiOutlineClose} from "react-icons/ai";

const Book = ({book, i, handleRemoveBook, handleChangeStatus}) => {
    const router = useRouter();

    return (
        <div className="book">
            {/*{console.log(book.id)}*/}
            <Link
                key={"x" & book.id}
                prefetch={false}
                href={`/bookedit/${book.id}`}
                className="bg-gray-700 hover:bg-gray-600 cursor-pointer   rounded-md"
            >

                <h2 className="null">{book.name}</h2>
                <div className="bookDetail">
                    {/*<p>Name: {book.name}</p>*/}
                    <p>Author: {book.author}</p>
                    <p>Price: {book.price}</p>
                    <p>Date: {new Date(book.date).toLocaleDateString()}</p>
                    <p className="mb-3">
                        <b className="">Status:</b> {book.status}
                    </p>
                </div>
            </Link>
            <div className="buttons">
                <button onClick={() => router.push(`/bookedit/${book.id}`)}>Edit</button>
                <button onClick={() => handleRemoveBook(book.id)}>Delete</button>
                <button onClick={() => handleChangeStatus(book.id, STATUS_IN_PROGRESS)}><AiOutlineCheck/></button>
                <button onClick={() => handleChangeStatus(book.id, STATUS_DONE)}><AiOutlineClose /></button>
            </div>
        </div>
    )
}

export default Book
