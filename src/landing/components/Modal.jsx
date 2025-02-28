import React, {useState} from 'react';
import styles from '../../styles/landing/Todo.module.scss';

const Modal = ({isOpen ,selectedItem, onClose}) => {
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className={`${styles.modal} ${isOpen ? styles.open : ''}`}>
            {selectedItem && (
                <div className={styles.modal_box}>
                    <input className={styles.title} value={selectedItem.title} onChange={handleChange} id='textarea-small'/>
                    <button className={styles.closeBtn} onClick={onClose}>X</button>
                    <p className={styles.content}>
                        {selectedItem.content}
                    </p>
                    <span>Powered by <a href='Froala Editor'>어쩌구임</a></span>
                </div>
            )}
        </div>
    )
};

export default Modal;