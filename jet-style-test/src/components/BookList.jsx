import React, {useContext} from 'react';
import {BooksContext} from "../context/BooksContext";
import BookListItem from "./BookListItem";

const BookList = () => {
    const { books } = useContext(BooksContext)

    return (
        books.length ?
            <div className='mt-2'>
                {books.map(book =>
                    <BookListItem book={book} key={book.id}
                    />
                )}
            </div> :
            <h3 className="card-header text-center">Список пуст.</h3>
    );
};

export default BookList;