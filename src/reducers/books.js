export const books = (books=[],action)=>{
  switch(action.type){
    case 'CREATE_BOOK':
      return [...books,action.book]
    case 'REMOVE_BOOK':
      return books.filter((book)=> book.id!==action.book.id)
    default :
    return books;
  }
}