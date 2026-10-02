import { useState } from 'react'
import AllBooks from './components/AllBooks'
import BookDetail from './components/BookDetail'
import BookByAuthor from './components/BookByAuthor'
import BookForm from './components/BookForm'
function App() {
  

  return (
    <>
      <BookForm />
      <AllBooks />
      <BookDetail title = "Shoe Dog"/>
      <BookByAuthor author = "Harper Lee" />
    </>
  )
}

export default App
