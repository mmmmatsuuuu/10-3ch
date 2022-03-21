import { useState, useEffect } from "react";
import { NextPage, GetStaticProps } from "next";
import Layout from '../../components/layout';
import { MyRecommendCard } from "../../components/common/card";

export type PostType = {
    no: number;
    time: string;
    article: string;
    links: string[];
}

export const getPosts = async() => {
    // 変数定義 ============================================
    // 
    // ====================================================
    const URL:string = "https://script.google.com/macros/s/AKfycbzr4AMaPD9qTI6CDxnBxnDn1CFwOd5EBeS22vmhg-xoYtULODIRTrWHIN1YnHHtst22Yw/exec";
    let response:any;                 // フェッチデータ
    let shapedData:PostType[] = []; // 整形済みデータ

    // データの取得 =========================================
    // google spreadsheetから
    // ====================================================
    response = await fetch(URL)
    .then(res => res.json())
    .then(data => {
        return data;
    });

    // 取得データの検証と整形 =================================
    // 
    // ====================================================
    if (response.datas) {
        for (let i=0; i< response.datas.length; i++) {
            var d = response.datas[i];
            var p:PostType = {
                no: d.no,
                time: d.time,
                article: d.article,
                links: d.links,
            }
            shapedData.push(p);
        }
    }

    // データの返却 =========================================
    // 
    // ====================================================
    return shapedData;
}

const MyRecommend:NextPage = () => {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [flag, setFlag ]  = useState<boolean>(false);

    useEffect(() => {
        (async() => {
            let temp = await getPosts();
            setPosts(temp);
            setFlag(true);
        })();
    }, []);

    const Compo = () => {
        if (flag) {
            return (
                <div className="grid grid-row-5 divide-y">
                    { posts.map(data => {
                        return (
                            <MyRecommendCard
                                key={data.no}
                                no={ data.no }
                                time={ data.time }
                                article={ data.article }
                                links={ data.links }
                            />
                        )
                    })}
                </div>
            );
        } else {
            return (
                <div className="h-96 flex justify-center items-center">
                    <div className="animate-pulse">
                        <MyRecommendCard
                            no={ 1 }
                            time=""
                            article="loading..."
                            links={[]}
                        />
                    </div>
                </div>
            );
        }
    }
    return (
        <Layout
            pageTitle="My Recommend"
        >
            <div
            className='max-w-screen-xl h-full m-auto py-4'
            >
                <div className='md:col-span-2 xl:col-span-3 bg-white rounded p-1 md:p-4 xl:px-8'>
                    <h2 className="text-3xl font-bold mb-4 border-b border-sky-400">My Recommend</h2>
                    <p className="mb-24">
                    私が面白いと思ったものならなんでも紹介
                    </p>

                    <Compo />
                </div>
            </div>
        </Layout>
    )
}

export default MyRecommend;