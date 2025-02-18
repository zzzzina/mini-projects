import React, {useState} from 'react';

const TodoMain3 = () => {
    const [inputValue, setInputValue] = useState('')
    const [addItem, setAddItem] = useState([])
    const [editInputIndex, setEditInputIndex] = useState(null)
    const [editInputValue, setEditInputValue] = useState('')

    const handleChangeValue = (e) => {
        setInputValue(e.target.value)
    }

    const handleAddClick = (e) => {
        if(inputValue !== ''){
            setAddItem(prevItem => [...prevItem, inputValue])
            setInputValue('')
        }
        console.log('추가된 입력값: ', inputValue)
    }

    const handleEditClick = (item, index) => {
        console.log('수정할래요: ', item,'인덱스: ',index)
        setEditInputValue(item)
        setEditInputIndex(addItem[index])
    }

    const handleEditChange = (e) => {
        console.log(e.target.value)
        setInputValue(e.target.value)
    }

    const handleSaveClick = (index) => {
        const updateItem = [...addItem]
        updateItem[editInputIndex] = editInputValue
        setAddItem(updateItem)
        setEditInputIndex(null)

        setEditInputValue('')
    }

    const handleDeleteButton = (index) => {
        const newItem = addItem.filter((item, i) => i !== index)
        setAddItem(newItem)
    }

    return (
        <div>
            <div>
                <input value={inputValue} onChange={handleChangeValue}/>
                <button onClick={handleAddClick}>추가</button>
            </div>
            
            <div>
                {addItem.map((item, index) =>
                    <div key={index}>
                        {editInputIndex === index ? (
                            <div>
                                <input onChange={(e) => handleEditChange(e, index)}/>
                                <button onClick={() => handleSaveClick(index)}>저장하기</button>
                            </div>
                        ) : (
                            <div>
                                <span>{item}</span>
                                <buttons onClick={() => handleEditClick(item, index)}>수정하기</buttons>
                            </div>
                            )
                        }
                        <button onClick={() => handleDeleteButton(index)}>삭제하기</button>
                    </div>
                )}
            </div>

        </div>
    );
};

export default TodoMain3;