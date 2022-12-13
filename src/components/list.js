import classes from './List.module.css';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
// import EditItem from './edit';

import { v4 as uuidv4 } from 'uuid';
// import Form from './Form';
const getLocalItmes = () => {
  let list = localStorage.getItem('lists');
  console.log(list);

  if (list) {
      return JSON.parse(localStorage.getItem('lists'));
  } else {
      return [];
  }
}
const List=()=>{

  const [text,setText]=useState('');
  const [isEditing,setIsEditing]=useState(false);
  const[update,setUpdate]=useState('');
  const [newTodo,setNewTodo]=useState([]);
  const [isEditItem, setIsEditItem] = useState(null);

  const handleChange=(e)=>{
   
    setText(e.target.value)
   }
   const handleUpdate=(e)=>{
    
      setUpdate(e.target.value)
     }
  const handleEditSubmition=(e)=>{
 
    e.preventDefault()
    if( isEditing) {
      
    let newItem=  newTodo.map((elem) => {
              if (elem.id === isEditItem) {
                  return { ...elem, text: update }
              }
              return elem;
          })
      
           setNewTodo(newItem)
          setText('')
  
   console.log("f",newItem)
   setUpdate('')
   setIsEditing(false)
   }
  }
  
  const handleSubmition = (e) => {
    e.preventDefault()
    const allInputData = { id: uuidv4(), text:text }
    setNewTodo([...newTodo, allInputData]);
   setText('')
   setIsEditing(false)
   setUpdate('')
            setIsEditItem(null);
             
}


// useEffect(() => {
//   localStorage.setItem('lists', JSON.stringify(newTodo))
// }, [newTodo]);
  //  let setId = window.localStorage.setItem("id",[...id,id])

  
  
  //   let getId = window.localStorage.getItem("id")
 
  const handleEdit=(id)=>{
    setIsEditing(true)
    let newEditItem = newTodo.map((item) =>{
    
     return item.id === id ? setUpdate(item.text): ''
 
    })
    
    // setNewTodo(newEditItem);
    console.log("id",id)
    setIsEditItem(id);
    
  }
 
  
  
  
// const updateItem =(task)=>{
//  setNewTodo((prevState)=> {
//   prevState.map((t)=>{
//     return t.id === task.id ? {...t, text:task.text}:t
//   })
//  })
//  setIsEditing(false)
// }

  const handleDelete=(id)=>{
    const filterId= newTodo.filter((item) =>{return item.id !== id})

   setNewTodo(filterId)
  // const deleteTask =[...newTodo]
  // deleteTask.splice(id,1)
  // setNewTodo(deleteTask)


  }
 
  
  const handleCancallation=(e)=>{
    e.preventDefault()
    setIsEditItem(null)
    setIsEditing(false)
    setText('')
    setUpdate('')
   } 


  return (
    <>
 {!isEditing ?
    <form className={classes.outline} onSubmit={handleSubmition}>  
    <input type="text" placeholder='Input A Task' className={classes.input} value={text} onChange={handleChange}/>
    <button className={classes.button}>sumbit</button>
    </form>
 /* <Form onSumbtion = {handleSubmition}  onHandleChanges={handleChange}></Form> */
   :
   <form  className={classes.outline} onSubmit={handleEditSubmition}>
   <input type="text" placeholder='Input A Task' className={classes.input} value={update} onChange={handleUpdate}/>
 <button className={classes.button} onClick={handleCancallation}>cancel</button>
 <button className={classes.button}  >update</button>
  </form> 

  //  <EditItem  onSubmtion={handleEditSubmition} onUpdates={handleUpdate}
  //  updateItem={updateItem} onCancel={handleCancallation} />
   
   }
  
    <ul className={classes.box}>
    {newTodo.map((item,index)=>{
     return <ItemList  key={index} id={text.id} item={item.text} onEdit={handleEdit.bind(null,item.id)} onDelete={handleDelete.bind(null,item.id)}  ></ItemList>
    })
     
  }
 </ul>
    </>
    
  )
}
export default List;