'use client'
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import {DatePicker} from '@gsebdev/react-simple-datepicker';

// import {STATUS_DONE, STATUS_IN_PROGRESS} from "@/app/constants/statuses";

const BookForm = ({ book, handleSubmit }) => {

  const [bookState, setBookState] = useState({
    name: book ? book.name : '',
    author: book ? book.author : '',
    price: book ? book.price : '',
    date: book ? book.date : '',
  });


  const handleChange = (e) => {
    setBookState({
      ...bookState,
      [e.target.name]: e.target.value
    })
  }

  const onChangeCallback = (e) => {
        setBookState({
          ...bookState,
          date: e.target.value
        })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({
      id: uuidv4(),
      // date: new Date(),
      ...bookState
    });
    setBookState({ name: '', author: '', price: '', date: ''})
  }

  const renderInputField = (label, placeholder, name) => (
    <div className="inputField">
      <label htmlFor={"x"+name}>{label}</label>
      <input id={"x"+name} value={bookState[name]} onChange={handleChange} name={name} type="text" placeholder={placeholder} />
    </div>
  );

  const disabledSubmit = !bookState.name || !bookState.author || !bookState.price;

  return (
    <form onSubmit={onSubmit} className="form">
      {renderInputField('Название книги', 'Введите название книги...', 'name')}
      {renderInputField('Автор книги', 'Введите имя автора...', 'author')}
      {renderInputField('Цена книги', 'Введите стоимость книги...', 'price')}
        <DatePicker
            id='datepicker-id'
            name='date-demo'
            onChange={onChangeCallback}
            placeholder={new Date(book.date).toLocaleDateString()}
            value={new Date()}
        />
      <button type="submit" className="btnForm" disabled={disabledSubmit}>{book.name ? 'Обновить' : 'Ввести'}</button>
    </form>
  )
}

export default BookForm
