import Link from 'next/link';
import classes from './Layout.module.css';

const Layout = ({ children }) => {
    return (
        <>
            <ul className={classes.navigation}>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/posts"><a>Posts</a></Link>
                </li>
            </ul>

            <div className={classes.content}>
                {children}
            </div>
        </>
    );
};

export default Layout;
