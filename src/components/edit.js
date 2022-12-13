
// import { useState } from 'react';
import classes from './List.module.css';

const EditItem=(props,{editedTask,updateItem})=>{
  // const[update,setUpdate]=useState(editedTask)
  // const handleEditChange=(e)=>{
    
  //   setUpdate(e.target.value)
  //  }
  //  const handleUpdateSubmition=(e)=>{
  //   e.preventDefault()
  //   updateItem({...editedTask,text:update})

  // }
  
  return (
   
      <form  className={classes.outline} onSubmit={props.onSubmtion}>
   
   <input type="text" placeholder='Input A Task' className={classes.input} value={props.update} onChange={props.onUpdates}/>
 <button className={classes.button} onClick={props.onCancel}>cancel</button>
 <button className={classes.button} >update</button>
  </form> 


  )
}

export default EditItem;