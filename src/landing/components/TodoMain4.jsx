import React, {useState} from 'react';
import styles from "../../styles/landing/Todo.module.scss";

const TodoMain4 = () => {
    const [inputValue, setInputValue] = useState('')
    const [addItem, setAddItem] = useState([])
    const [showInput, setShowInput] = useState(false)
    const [editInputIndex, setEditInputIndex] = useState(null)
    const [editInputValue, setEditInputValue] = useState('') // 수정입력창 입력값

    const currentTime = () => {
        const date = new Date()
        const years = date.getFullYear()
        const months = String(date.getMonth()+1).padStart(2,0)
        const days = String(date.getDate()).padStart(2, 0)
        const hours = String(date.getHours()).padStart(2, 0)
        const minutes = String(date.getMinutes()).padStart(2, 0)

        return (`${years}-${months}-${days} ${hours}:${minutes}`)
    }

    // 초기값에서 어쩌구값으로 변경
    const handleChangeValue = (e) => {
        setInputValue(e.target.value)

    }
    // 입력된 값을 추가
    const handleAddClick = (e) => {
        if(editInputIndex !== null){
            alert('수정을 완료하세요.')
            setInputValue('')

        } else if(inputValue !== ''){
            const newItem = {content: inputValue, checked: false, time: currentTime(), edited: false}
            setAddItem([...addItem, newItem])
            setInputValue('')
        }
    }
    // 수정버튼눌렀다
    const handleEditClick = (index) => {
        const updatedItems = [...addItem]
        updatedItems[index].isEditing = true
        setAddItem(updatedItems)
        setEditInputIndex(index)
        setEditInputValue(addItem[index].content)
    }

    // 수정값입력한다
    const handleEditChange = (e) => {
        setEditInputValue(e.target.value)
    }

    //저장버튼눌렀다
    const handleSaveClick = () => {
        const updatedItems = [...addItem]
        updatedItems[editInputIndex].content = editInputValue // 수정한 입력값
        updatedItems[editInputIndex].time = currentTime() // 수정한 시간
        updatedItems[editInputIndex].edited = true // 수정 완료 수정됨 표시
        setAddItem(updatedItems)
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

    const handleResetClick = () => {
        setEditInputIndex(null)
        setEditInputValue('')
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
                                <div className={styles.btnStyle}>
                                    <button onClick={handleSaveClick}>저장하기</button>
                                    <button onClick={() => handleResetClick(index)}>취소</button>
                                </div>
                            </div>
                        ) : (
                            <div className={styles.editStyle}>
                                <input type="checkbox"
                                       style={{width: '15px', margin: '6px 5px 0 7px'}}
                                       checked={item.checked}
                                       onChange={() => checkBoxChange(index)} />
                                <span
                                    className={styles.spanStyle}
                                    style={{textDecoration : item.checked ? 'line-through' : 'none'}}>{item.content}</span>

                                <span className={styles.spanStyle2}>{item.time}</span>
                                {item.edited && <span className={styles.spanStyle3}>수정됨</span>}

                                <div className={styles.btnStyle}>
                                    {!item.checked ? (
                                        <button onClick={() => handleEditClick(index)}>수정하기</button>
                                    ):(
                                        <button onClick={() => handleDelClick(index)}>삭제</button>
                                    )}
                                </div>
                            </div>
                        )
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default TodoMain4;