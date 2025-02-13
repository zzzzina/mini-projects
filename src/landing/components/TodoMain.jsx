import React, {useRef, useState} from 'react';
import styles from "../../styles/landing/Todo.module.scss";
const TodoMain = () => {
    const [inputValue, setInputValue] = useState('')
    const [addItem, setAddItem] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [editSave, setEditSave] = useState([])

    const handleChangeValue = (e) => { //input창 상태값 변환 함수
        console.log(inputValue)
        setInputValue(e.target.value)
    }

    const handleAddClick = (e) => { // 추가버튼 onClick 상태값 변환 함수
        if(inputValue.trim() !== ''){
            console.log('추가버튼 딸깍')
            console.log('입력값은:' ,inputValue)

            setAddItem([...addItem, inputValue])
            setInputValue('')
        }
    }

    const handleEditClick = (index) => { // 수정버튼 onClick 변환함수
        if(editSave !== ''){
            const prevList = addItem.slice(0,index)
            const exList = addItem.slice(index, addItem.length - 1)
            setAddItem([...prevList, editSave[index], exList])
        }
        setIsEditing(prev => !prev)
            console.log('수정버튼 딸깍')
            console.log('수정할 아이템은: ', addItem[index])
    }

    const handleDeleteClick = (index) => { // 삭제버튼 onClick 변환함수
        const updateList = addItem.filter((item, i) => i !== index)
        setAddItem(updateList)

        console.log('삭제 후 아이템들: ', updateList)
    }

    const changeToValue = (e, index) => {
        const target = inputValue[index]
        const prevList = editSave.slice(0,index)
        const exList = editSave.slice(index, editSave.length)
        setEditSave([...prevList, e.target.value, ...exList])
        console.log(editSave)
    }

    return (
        <div>
            <div>
                <input onChange={handleChangeValue} value={inputValue} />
                <button onClick={handleAddClick}>추가</button>
            </div>
z
                <ul>
                    {addItem.map((item, index) =>
                        <li key={index} style={{listStyle: 'none'}}>
                            <span>{item}</span>
                            <input className={isEditing ? styles.noneDisplay : ''}
                                   value={editSave[index]} onChange={(e) => changeToValue(e, index)} />

                            <button onClick={() => handleEditClick(index)}>수정씨</button>
                            <button onClick={() => handleDeleteClick(index)}>삭제씨</button>
                        </li>
                    )}
                </ul>

        </div>
    );
};

export default TodoMain;