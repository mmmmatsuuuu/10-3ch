import { mdArticleType } from "../components/md/article";

export function sortByDate(datas: mdArticleType[]):mdArticleType[] {
    return datas.sort((a, b) => {
        const aDate = new Date(a.date);
        const bDate = new Date(b.date);
        const diff = bDate.getTime() - aDate.getTime();
        return diff;
    });
}

export function sortByTitle(datas: mdArticleType[]):mdArticleType[] {
    return datas.sort((a, b) => {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
    })
}