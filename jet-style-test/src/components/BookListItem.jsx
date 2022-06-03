import React, {useContext, useState} from 'react';
import {BooksContext} from "../context/BooksContext";

const BookListItem = ({book, onDelete , onSave}) => {
    const [isEditing, setIsEditing] = useState(false)

    const { dispatch } = useContext(BooksContext)

    const[ author, setAuthor ] = useState(book.author)
    const[ title, setTitle ] = useState(book.title)

    const handleSaveBook = () => {
        if (author.length && title.length) {
            dispatch({type: 'UPDATE_BOOK', payload: {id: book.id, title,author}})
            setIsEditing(false)
        }
    }

    const onDeleteBook = (id) => {
        dispatch({type:'DELETE_BOOK', payload: {id}})
    }

    return (
        <div className="card text-center mt-2">
            {isEditing ?
            <>
                    <h5>Редактировать книгу</h5>
                    <div className="mb-1">
                        <input type="text" className="form-control" placeholder='автор'
                               value={author}
                               onChange={(e) => setAuthor(e.target.value) }
                        />
                    </div>
                    <div className="mt-1">
                        <input type="text" className="form-control" placeholder='название'
                               value={title}
                               onChange={(e) => setTitle(e.target.value) }
                        />
                    </div>

                <div className="d-grid gap-2 d-md-block">
                    <button onClick={handleSaveBook} className="btn btn-success">Сохранить</button>
                    <button onClick={() => setIsEditing(false)}  className="btn btn-warning">Выйти</button>
                </div>
            </> :
                <>
                    <div className="card-header">
                        <h5 className="card-title">{book.author}</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{book.title}</p>
                        <button onClick={() => onDeleteBook(book.id)} className="btn btn-primary">Удалить</button>
                        <button onClick={() => setIsEditing(true)} className="btn btn-secondary">Изменить</button>
                    </div>
                </>
            }
        </div>
    );
};

export default BookListItem;