import Link from "next/link";
import { useRouter } from "next/router";

export const Header:React.FC = () => {
    const router = useRouter();
    const pathname = router.pathname.split("/")[1];
    return (
        <div className="max-w-screen-xl h-full m-auto flex justify-between items-center">
            <a 
                href={`${process.env.NEXT_PUBLIC_BASE_PATH }/`}
                className="rounded-full bg-gradient-to-r from-green-400 to-sky-400"
            >
                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH }/logo.svg`} alt="icon" width="50px"/>
            </a>
            <ul
                className="flex justify-center items-center font-bold"
            >
                <li className="m-2">
                    <InternalLink name="Crunch Time" thisPath="crunch-time" path={ pathname } />
                </li>
                <li className="m-2">
                    <InternalLink name="My Recommend" thisPath="my-recommend" path={ pathname } />
                </li>
                <li className="m-2">
                    <InternalLink name="Over The Fence" thisPath="over-the-fence" path={ pathname } />
                </li>
            </ul>
        </div>
    )
}

const InternalLink:React.FC<{
    name: string;
    path: string;
    thisPath: string;
}> = ({name, path, thisPath}) => {
    if (path == thisPath) {
        return (
            <Link href={`/${ thisPath }`}>
                <a 
                    className="text-gray-400"
                >
                    { name }
                </a>
            </Link>
        );
    } else {
        return (
            <Link href={`/${ thisPath }`}>
                <a 
                    className="grad-hover"
                >
                    { name }
                </a>
            </Link>
        );
    }
}