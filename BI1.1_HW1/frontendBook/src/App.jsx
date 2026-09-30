import { useState } from 'react'
import AllBooks from './components/AllBooks'
import BookDetail from './components/BookDetail'
import BookByAuthor from './components/BookByAuthor'
function App() {
  

  return (
    <>
      <AllBooks />
      <BookDetail title = "Shoe Dog"/>
      <BookByAuthor author = "Harper Lee" />
    </>
  )
}

export default App
