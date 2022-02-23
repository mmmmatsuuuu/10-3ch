import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { mdArticleType } from "../components/md/article";

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostData(id: string):mdArticleType {
    // ファイルパスの取得
    const fullPath = path.join(postsDirectory, `${id}.md`);

    // ファイルデータの取得
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // マークダウンの解析
    const mdObj = matter(fileContents);

    // オブジェクトの生成
    const article:mdArticleType = {
        filename   : id,
        title      : mdObj.data.title ? mdObj.data.title : "",
        topics     : mdObj.data.topics ? mdObj.data.topics : "",
        article    : mdObj.content,
        date       : mdObj.data.date ? mdObj.data.date : "",
        category   : mdObj.data.category ? mdObj.data.category : "",
        published  : mdObj.data.published ? mdObj.data.published : false,
    }

    // 返却
    return article;
}

export function getPostDatas():mdArticleType[] {
    // ディレクトリ内の全てのデータを取得(第１階層)
    const fileNames = fs.readdirSync(postsDirectory);

    // 全てのデータに対して
    const allPostsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');
    
        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        // ファイルデータの取得
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // マークダウンの解析
        const mdObj = matter(fileContents);

        const article:mdArticleType = {
            filename   : id,
            title      : mdObj.data.title ? mdObj.data.title : "",
            topics     : mdObj.data.topics ? mdObj.data.topics : "",
            article    : mdObj.content,
            date       : mdObj.data.date ? mdObj.data.date : "",
            category   : mdObj.data.category ? mdObj.data.category : "",
            published  : mdObj.data.published ? mdObj.data.published : false,
        }
        return article;
    });

    return allPostsData;
}

export function getPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    });
}