import classes from './List.module.css';
// import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const Form = (props)=>{
  const [text,setText]=useState('');
  // const [newTodo,setNewTodo]=useState([])
  // let id;
  // const handleChange=(e)=>{
   
  //   setText(e.target.value)
  //  }
  //  const handleSubmition=(e)=>{
  //   e.preventDefault()
  //   addItem(
  //     {
  //        text:text,
  //       id : uuidv4()
  //   })
  // console.log("here",addItem)
  //  setText('')
  // //  let setId = window.localStorage.setItem("id",[...id,id])

  // }
  console.log("tye",props)

  return (
     <form className={classes.outline} onSubmit={props.onSumbtion}>  
   <input type="text" placeholder='Input A Task' className={classes.input} value={text} onChange={props.onHandleChanges}/>
  
    
  <button className={classes.button}>sumbit</button>
  </form>
   
 
)

   
 


}


export default Form