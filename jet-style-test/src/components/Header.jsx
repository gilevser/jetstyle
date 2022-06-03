import React, {useContext, useState} from 'react';
import {BooksContext} from "../context/BooksContext";

const Header = () => {

    const { dispatch } = useContext(BooksContext)

    const[ author, setAuthor ] = useState('')
    const[ title, setTitle ] = useState('')

    const handleAddForm = (e) => {
        e.preventDefault()
        if (author.length && title.length) {
            dispatch({type: 'ADD_BOOK', payload: {author, title} })
            setAuthor('')
            setTitle('')
        }
    }

    return (
        <header>
            <h1 className="card-header text-center">Список книг.</h1>
            <h5>Добавить книгу</h5>
            <form onSubmit={handleAddForm}>
                <div className="mb-1">
                    <input type="text" className="form-control" placeholder='автор'
                           value={author}
                           onChange={(e) => setAuthor(e.target.value) }
                    />
                </div>
                <div className="mb-1">
                    <input type="text" className="form-control" placeholder='название'
                           value={title}
                           onChange={(e) => setTitle(e.target.value) }
                    />
                </div>
                <button  type="submit" className="btn btn-primary">Отправить</button>
            </form >

           </header>
    );
};

export default Header;