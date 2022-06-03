import React, {useContext} from 'react';
import {BooksContext} from "../context/BooksContext";
import BookListItem from "./BookListItem";

const BookList = () => {
    const { books } = useContext(BooksContext)

    return (
        <div className='mt-2'>
            {books.map(book =>
            <BookListItem book={book} key={book.id}
            />
            )}
        </div>
    );
};

export default BookList;