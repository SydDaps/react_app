export const List = (props) => {
  return (
    <div>
      <p>{props.id}.{props.list}</p><button onClick={() => {props.deleteList(props.id)}}>X</button>
    </div>
  )
}