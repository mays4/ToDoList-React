
import classes from './ItemList.module.css'

const ItemList=(props)=>{

  return (
    <>
  
   <li className={classes.list}>
     
        <p className={classes.item}>{props.item}</p>
    <button className={classes.button} onClick={props.onEdit}>Edit</button>
    <button className={classes.button} onClick={props.onDelete}>delete</button>

    
    </li>
    </>

  )
}

export default ItemList;