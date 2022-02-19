import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { mdArticleType } from "../components/md/article";

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);

    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const mdObj = matter(fileContents);
    const article:mdArticleType = {
        filename   : id,
        title      : mdObj.data.title ? mdObj.data.title : "",
        topics     : mdObj.data.topics ? mdObj.data.topics : "",
        article    : mdObj.content,
        date       : mdObj.data.date ? mdObj.data.date : "",
        category   : mdObj.data.category ? mdObj.data.category : "",
    }

    return article;
}

export function getPostDatas() {
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');
    
        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
    
        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
    
        // Combine the data with the id
        return {
          id,
          ...matterResult.data
        };
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