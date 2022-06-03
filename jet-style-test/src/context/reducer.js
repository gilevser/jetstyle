import {v4 as uuidv4} from "uuid";

export const bookReducer = (state, action) => {
    const {type, payload } = action

    switch (type) {
        case 'ADD_BOOK':
            return [...state, {id: uuidv4(), author: payload.author, title: payload.title}];
        case 'UPDATE_BOOK':
            return state.map(book => book.id === payload.id ? {...book,author: payload.author,title: payload.title } : book);
        case 'DELETE_BOOK':
            return state.filter(elem  => elem.id !== payload.id);
        default: return state
    }
}