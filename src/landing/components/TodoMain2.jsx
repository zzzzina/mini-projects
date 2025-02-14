import React, {useState} from 'react';
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
            setAddItem(prevItem => [...prevItem, inputValue])
            setInputValue('')
        }
    }
    // 수정버튼눌렀다
    const handleEditClick = (item, index) => {
        console.log('아이템, 인덱스:' ,item, index)
        setEditInputIndex(index)
        setEditInputValue(addItem[index])
    }

    // 수정값입력한다
    const handleEditChange = (e) => {
        setEditInputValue(e.target.value)
    }

    //저장버튼눌렀다
    const handleSaveClick = () => {
        const updateItems = [...addItem]
            updateItems[editInputIndex] = editInputValue
            setAddItem(updateItems)
            setEditInputIndex(null)
            setEditInputValue('')
    }

    const handleDelClick = (index) => {
        const newItems = addItem.filter((item, i) => i !== index)
         setAddItem(newItems)
    }

    const toggleInput = () => {
        setShowInput(!showInput);
    };

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
                                 <span>{item}</span>
                                 <button onClick={() => handleEditClick(item, index)}>수정하기</button>
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