import React, { createContext, useEffect, useState } from "react";


const MyContext = createContext();

const Main = (props) => {
    const [books, setBooks] = useState([]);
    const [check, setCheck] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [bookPos, setBookPos] = useState('');

    useEffect(()=> {
        document.getElementById('search').focus();      
      },[])
    return (
    <MyContext.Provider value={{booksArray : [books, setBooks], check : [check, setCheck], modal : [modalOpen, setModalOpen], bookPos: [bookPos, setBookPos]}}>
    {props.children}
    </MyContext.Provider>
    )
}

export  { Main, MyContext };