import styles from '../../styles/landing/Todo.module.scss';

const Header = () =>{
    return (
        <nav className={styles.navBox}>
            <ul>
                <li><a href='/main'>홈</a></li>
                <li><a href='/todomain'>todo</a></li>
                <li><a href='/desc'>푸바오</a></li>
                <li><a href='/notice'>게시판</a></li>
                <li><a href='/signinup'>SignUp / SignIn</a></li>

            </ul>

        </nav>
    )
}

export default Header;