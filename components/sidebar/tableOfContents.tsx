type navProps = {
    clsName: string;
}

export const TableOfContents: React.FC<navProps> = ({
    clsName
}) => {
    return (
        <nav
            className={`h-80 overflow-y-scroll ${clsName}`}
        >
        </nav>
    )
}