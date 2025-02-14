// import React, {useRef, useState} from 'react';
// import '../../assets/delete.png';
// // import styles from "../../styles/landing/Todo.module.scss";
//
// const Todo = () => {
//     const todos = [
//         {id: 1, title: '할 일1', completed: false},
//         {id: 2, title: '할 일2', completed: true}
//     ]
//     const [todoList, setTodoList] = useState(todos)
//
//     const [isFocused, setIsFocused] = useState(false)
//     const inputRef = useRef(null)
//
//     const [addItem, setAddItem] = useState([])
//     const [todoItem, setTodoItem] = useState('')
//     const [showInput, setShowInput] = useState(false)
//
//     const handleInputValue = (e) => {
//         setTodoItem(e.target.value)
//     }
//
//     const handleAddClick = (e) => {
//         if(todoItem !== ''){
//             console.log(addItem)
//             setAddItem(prevItem => [...prevItem, todoItem])
//             setTodoItem('')
//         }
//     }
//
//     const handleButtonClick = () => {
//         setIsFocused(true);
//         inputRef.current.focus()
//     }
//
//     const addTodoInput = () => {
//         setShowInput(true)
//     }
//
//     const handleDeleteClick = (index) => {
//         const newTodoList = [todoList.filter((item, i) => i !== index)]
//         setTodoList(newTodoList)
//     }
//     return (
//         <div className={styles.todoContainer}>
//             <div className={styles.title}>
//                 <h2>Todo! 입니다뇽 >:)</h2>
//                 <span className={styles.newTodoItem} onClick={addTodoInput}>새로운 Todo를 만들어요!</span>
//             </div>
//
//             <div className={styles.inputStyle}>
//                 {todoList.map((item, index) =>
//                     <div className={styles.checkInput} key={item.id}>
//                         <input type='checkbox' value={item.completed}/>
//                         <input type='text'
//                                value={item.title}
//                                ref={inputRef}
//                                disabled={!isFocused}
//                                onChange={handleInputValue} />
//                         <img onClick={handleButtonClick} src='../../assets/modify.png'/>
//                         <img onClick={() => handleDeleteClick(index)} src='../../assets/delete.png' />
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };
//
// export default Todo;