import Link from "next/link"

export const Header:React.FC = () => {
    return (
        <div className="max-w-screen-xl h-full m-auto flex justify-between items-center">
            <a href={`${process.env.NEXT_PUBLIC_BASE_PATH }/`}>
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH }/logo.svg`} alt="icon" width="50px"/>
            </a>
            <ul
                className="flex justify-center items-center font-bold"
            >
                <li className="m-2">
                    <Link
                        href={`${process.env.NEXT_PUBLIC_BASE_PATH }/crunch-time/`}
                    >
                    <a className="grad-hover">
                        Crunch Time
                    </a>
                    </Link>
                </li>
                <li className="m-2">
                    <Link
                        href={`${process.env.NEXT_PUBLIC_BASE_PATH }/it-news-recommend/`}
                    >
                    <a className="grad-hover">
                        IT News Recommend
                    </a>
                    </Link>
                </li>
                <li className="m-2">
                    <Link
                        href={`${process.env.NEXT_PUBLIC_BASE_PATH }/over-the-fence/`}
                    >
                    <a className="grad-hover">
                        Over The Fence
                    </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}