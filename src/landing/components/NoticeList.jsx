import React, {useEffect, useState} from 'react';
import styles from '../../styles/landing/Todo.module.scss';
import data from '../../data';
import {

    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TableRow, Typography
} from '@mui/material';

import Modal from './Modal';
const NoticeList = () => {
    const [noticeData, setNoticeData] = useState(data);
    const [openModal, setOpenModal] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)

    const handleClick = (item) => {
        setSelectedItem(item)
        setOpenModal(true)
    }
    const handleCloseModal = (item) => {
        setOpenModal(false)
        setSelectedItem(null)
    }

    return (
        <div className={styles.notice_container}>
            <div className={styles.notice_title}>
                <h3>공지사항</h3>
                <a><button>대시보드 →</button></a>
            </div>

            <TableContainer className={styles.table_wrap}>
                <Table className={styles.table_container} stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={styles.cell1}>No.</TableCell>
                            <TableCell className={styles.cell2}>제목</TableCell>
                            <TableCell className={styles.cell3}>작성일</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {noticeData.map((item) =>
                            <TableRow className={styles.bodyRow} key={item.id} onClick={()=>handleClick(item)}>
                                <TableCell className={styles.cell1}>{item.id}</TableCell>
                                <TableCell className={styles.cell2}>{item.title}</TableCell>
                                <TableCell className={styles.cell3}>{item.date}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            <Modal isOpen={openModal} selectedItem={selectedItem} onClose={handleCloseModal}/>
        </div>
    );
};

export default NoticeList;