import type { NextApiRequest, NextApiResponse } from 'next';
// @ts-ignore
import fetchFavicon from "@meltwater/fetch-favicon";
import { hasProperty } from '../../utils/hasP';
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

type MetaData = {
    title: string;
    siteName: string;
    type?: string;
    image: string;
    url?: string;
    description?: string;
    favicon?: string;
}

export type dataApiRes = {
    metaData: MetaData;
}

export default async function getMeta(
  req: NextApiRequest,
  res: NextApiResponse<dataApiRes>
) {
  const metaData:MetaData = {
    title: "",
    siteName: "",
    type: "",
    image: "",
    url: "",
    description: "",
    favicon: "",
  }
  // urlの取得
  let href: string = "";
  if (hasProperty(req.query, "url")) {
    href = req.query.url as string;
  } else {
    res.status(404);
  }

  // htmlデータの取得
  await fetch(href)
  .then(res => res.text())
  .then(text => {
    const doms = new JSDOM(text);
    const metaDOMS = doms.window.document.getElementsByTagName('meta');
    for (let i = 0; i < metaDOMS.length; i++) {
      let pro = metaDOMS[i].getAttribute("property");
      if (typeof pro == "string") {
        if (pro.match("title")) metaData.title = metaDOMS[i].getAttribute("content");
        if (pro.match("site_name")) metaData.siteName = metaDOMS[i].getAttribute("content");
        if (pro.match("type")) metaData.type = metaDOMS[i].getAttribute("content");
        if (pro.match("image")) metaData.image = metaDOMS[i].getAttribute("content");
        if (pro.match("url")) metaData.url = metaDOMS[i].getAttribute("content");
        if (pro.match("description")) metaData.description = metaDOMS[i].getAttribute("content");
      }
    }
  });

  // faviconの取得
  const favicon = await fetchFavicon(href);
  metaData.favicon = favicon;

  // イメージを取得できていなかった場合はfaviconと置き換え
  if (metaData.image == "") metaData.image = favicon;

  res.status(200).json({ metaData: metaData });
}