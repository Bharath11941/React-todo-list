export function CompletedTodo({completed,title}){
  {
    if(completed === true){
      return(
        <li>{title}</li>
      )
    }
  }
}