import { mdArticleType } from "../components/md/article";

export function sortByDate(datas: mdArticleType[]):mdArticleType[] {
    return datas.sort((a, b) => {
        const aDate = new Date(a.date);
        const bDate = new Date(b.date);
        const diff = bDate.getTime() - aDate.getTime();
        return diff;
    });
}