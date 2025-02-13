import React, {useState} from 'react';
import styles from "../../styles/landing/Todo.module.scss";

const TodoMain2 = () => {
    const [inputValue, setInputValue] = useState('')
    const [addItem, setAddItem] = useState([])
    const [editAction    , setEditAction] = useState(false)
    const [editSave, setEditSave] =useState([])

    // 초기값에서 어쩌구 값으로 변경
    const handleChangeValue = (e) => {
        console.log(inputValue)
        setInputValue(e.target.value)
    }
    // 입력된 값을 추가
    const handleAddClick = (e) => {
        if(inputValue !== ''){
            console.log('추가버튼딸깍', addItem)
            setAddItem(prevItem => [...prevItem, inputValue])
            setInputValue('')
        }
    }
    //수정버튼 클릭시
    const handleEditClick = (index) => {
        setEditAction(index)
    }

    const handleEditValue = (e, index) => {
        const updatedEdit = [...editSave]

        updatedEdit[index] = e.target.value;  // 수정된 값을 해당 인덱스에 저장
        setEditSave(updatedEdit);
    }

    const handleDelClick = (index) => {
        const newItems = addItem.filter((item, i) => i !== index)
        setAddItem(newItems)
    }

    return (
        <div className={styles.container}>
            <div>
                <input value={inputValue} onChange={handleChangeValue} />
                <button style={{marginLeft: '5px'}} onClick={handleAddClick}>추가</button>
            </div>

            <div className={styles.mapItem}>
                {addItem.map((item, index) =>
                    <div key={index}>
                        <span>{item}</span>
                            <div>
                                {editAction === index ? (
                                    <input
                                        value={editSave[index]}
                                        onChange={(e) => handleEditValue(e, index)}
                                        className=""
                                    />
                                ) : null}
                                <button
                                        onClick={() => handleEditClick(index)}>수정
                                </button>
                            </div>

                        <button onClick={() => handleDelClick(index)}>삭제</button>
                    </div>
                )}
            </div>
        </div>

    );
};

export default TodoMain2;