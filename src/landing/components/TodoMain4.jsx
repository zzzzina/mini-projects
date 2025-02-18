import React, { useState } from 'react';
import styles from "../../styles/landing/Todo.module.scss";

const TodoMain2 = () => {
    const [inputValue, setInputValue] = useState('')
    const [addItem, setAddItem] = useState([])
    const [showInput, setShowInput] = useState(false)
    const [editInputIndex, setEditInputIndex] = useState(null)
    const [editInputValue, setEditInputValue] = useState('') // 수정입력창 입력값

    // 초기값에서 어쩌구 값으로 변경
    const handleChangeValue = (e) => {
        setInputValue(e.target.value)
    }
    // 입력된 값을 추가
    const handleAddClick = (e) => {
        if(inputValue !== ''){
            console.log(inputValue)
            const newItem = {content: inputValue, checked: false}
            setAddItem([...addItem,newItem])
            setInputValue('')
        }
    }
    // 수정버튼눌렀다
    const handleEditClick = (index) => {
        setEditInputIndex(index)
        setEditInputValue(addItem[index].content)
    }

    // 수정값입력한다
    const handleEditChange = (e) => {
        setEditInputValue(e.target.value)
    }

    //저장버튼눌렀다
    const handleSaveClick = () => {
        const updateItems = [...addItem]
        updateItems[editInputIndex].content = editInputValue
        setAddItem(updateItems)
        setEditInputIndex(null)
        setEditInputValue('')
    }

    const handleDelClick = (index) => {
        const updatedItems = addItem.filter((item, i) => i !== index)
        setAddItem(updatedItems)
    }

    const toggleInput = () => {
        setShowInput(!showInput);
    };

    const checkBoxChange = (index) => {
        const updatedItems = [...addItem]
        updatedItems[index].checked = !updatedItems[index].checked
        setAddItem(updatedItems)
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Todo! 입니다뇽</h2>
                <p onClick={toggleInput}>새로운 Todo를 만들어요!</p>

                {showInput && (
                    <div className={styles.addInputStyle}>
                        <input value={inputValue}
                               onChange={handleChangeValue}
                               placeholder='할 일을 입력하세요!'
                        />
                        <button onClick={handleAddClick}>추가</button>
                    </div>
                )}
            </div>

            <div className={styles.mapItem}>
                {addItem.map((item, index) =>
                    <div className={styles.itemStyle} key={index}>
                        {editInputIndex === index ? (
                            <div className={styles.editStyle}>
                                <input value={editInputValue} onChange={(e) => handleEditChange(e, index)}/>
                                <div>
                                    <button onClick={handleSaveClick}>저장하기</button>
                                    <button onClick={() => handleDelClick(index)}>삭제</button>
                                </div>
                            </div>
                        ) : (
                            <div className={styles.editStyle}>
                                <input type="checkbox"
                                       style={{width: '15px'}}
                                       checked={item.checked}
                                       onChange={() => checkBoxChange(index)} />
                                <span
                                    className={styles.spanStyle}
                                    style={{textDecoration : item.checked ? 'line-through' : 'none'}}>{item.content}</span>

                                {!item.checked && (
                                    <button onClick={() => handleEditClick(index)}>수정하기</button>
                                )}
                                <button onClick={() => handleDelClick(index)}>삭제</button>
                            </div>
                        )
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default TodoMain2;