
export const CREATE_BOOK = (book)=>{
  return{
    type:'CREATE_BOOK',
    book
  }
}
export const REMOVE_BOOK = (book)=>{
  return {
    type:'REMOVE_BOOK',
    book
  }
}