import Link from "next/link";

export default function AboutLayout(
    {
        children,
    }: {
        children: React.ReactNode;
    }) {
    return (
        <>
            <h1 className="head1">Информация и помощь</h1>
            {children}
        </>
    );
}
