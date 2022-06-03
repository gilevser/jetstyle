import {createContext, useEffect, useReducer} from "react";
import {bookReducer} from "./reducer";

export const BooksContext = createContext();

function BooksContextProvider({children}) {

    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const data = localStorage.getItem('books')
        return data ? JSON.parse(data) : []
    })

    useEffect(() => {
      localStorage.setItem('books', JSON.stringify(books))
    },[books])


    return (
        <BooksContext.Provider value={{ books ,dispatch}}>
            {children}
        </BooksContext.Provider>
    )
}

export default BooksContextProvider