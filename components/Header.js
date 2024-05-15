import Link from 'next/link';

const Header = () => {
    return (
        <header className="mx-auto flex max-w-screen-xl items-center mt-3 px-3 py-2.5 2xl:max-w-screen-2xl">
                <Link href={'/'}>
                <img src="/faviconi.png" alt="Zoom Tanzania" className="h-10 w-auto" />  
                </Link>
            </header>
    );
};

export default Header;
