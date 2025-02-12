import React, {useState} from 'react';

const TodoMain = () => {
    const [inputValue, setInputValue] = useState('')
    const [addList, setAddList] = useState([])

    const handleChangeValue = (e => {
        setInputValue(e.target.value)
    })

    const handleAddClick = (e) => {
        console.log('추가버튼 똑똑')
        console.log('입력된 값은: ', inputValue)

        if(inputValue.trim() !== ''){
            setAddList([...addList, inputValue])
            setInputValue('')
        }
    }

    const handleDeleteClick = (index) => {
        setAddList(index)
    }

    return (
        <div>
            <div>
                <input onChange={handleChangeValue} value={inputValue} />
                <button onClick={handleAddClick}>추가</button>
                
                <ul>
                    {addList.map((item, index) => (
                        <li key={index} style={{listStyle: 'none'}}>
                            <span>입력된 값은: {item}</span>
                            <button onClick={handleDeleteClick}>삭제씨</button>
                        </li>
                    ))
                    }
                </ul>

            </div>
        </div>
    );
};

export default TodoMain;