import { useEffect } from 'react';
import tocbot from 'tocbot';

type navProps = {
    clsName: string;
}

export const TableOfContents: React.FC = () => {
    useEffect(() => {
        tocbot.init({
            tocSelector: '.toc',
            contentSelector: '.article-body',
            headingSelector: 'h3, h4',
            hasInnerContainers: true,
        })
    
        return () => tocbot.destroy();
    }, []);

    return (
        <nav
            className={`h-80 overflow-y-auto toc`}
        >
        </nav>
    )
}