import Link from "next/link"

export const CrunchTimeNav: React.FC = () => {
    return (
        <nav>
            <ul className="">
                <li >
                    <Link
                        href={`/crunch-time/`}
                    >
                        <a className="block text-gray-400 ml-8 pl-2 py-2 border-b hover:border-sky-400 hover:text-black">本年度</a>
                    </Link>
                </li>
                <li>
                    <Link
                        href={`/crunch-time/archive`}
                    >
                        <a className="block text-gray-400 ml-8 pl-2 py-2 border-b hover:border-sky-400 hover:text-black">過年度</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export const ITNewsRecommendNav: React.FC = () => {
    return (
        <nav>
        </nav>
    )
}
export const OverTheFenceNav: React.FC = () => {
    return (
        <nav>
            <ul className="">
                <li >
                    <Link
                        href={`/crunch-time/`}
                    >
                        <a className="block text-gray-400 ml-8 pl-2 py-2 border-b hover:border-sky-400 hover:text-black">本年度</a>
                    </Link>
                </li>
                <li>
                    <Link
                        href={`/crunch-time/archive`}
                    >
                        <a className="block text-gray-400 ml-8 pl-2 py-2 border-b hover:border-sky-400 hover:text-black">過年度</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}