// import Link from "next/link";
// import {ModalState} from '../context/ModalContext'

export default function AboutLayout(
    {
        children,
    }: {
        children: React.ReactNode;
    }) {
    return (
        <div className="">
            <h1 className="head1">Каталог</h1>
            {children}
        </div>
    );
}
