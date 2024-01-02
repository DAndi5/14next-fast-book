import { Navigation } from "./Navigation";

const navItems = [
    { label: "Главная", href: "/" },
    { label: "Каталог", href: "/booklist" },
    { label: "Добавить", href: "/bookadd" },
    { label: "Помощь", href: "/about" },
];

const TheHeader = () => {
    return (
        <header className="header">
            {/*<nav className="hidden md:flex items-center">*/}
            <nav className="header-nav">
                <Navigation navLinks={navItems} />
            </nav>
        </header>)
}

export {TheHeader};
