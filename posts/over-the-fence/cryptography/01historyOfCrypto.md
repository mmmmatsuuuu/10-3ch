---
title: "01暗号の歴史"
date: "2022/2/26 16:59:00"
category: "over-the-fence"
topics: ["暗号の歴史"]
published: true
---

https://youtu.be/beEU-VpRgF8

# はじめに

インターネットが普及し、パソコンやスマートフォンに限らず、冷蔵庫や洗濯機などの家電、車までもがネットワークに接続するようになりました。  
インターネットに限らず、通信を行う際には、盗聴や改ざんなど様々な危険が潜んでいます。そして、古代からこのような危険に対抗すべく、色々な仕組みが作られてきました。  
その中の一つに暗号があります。今回はその暗号の歴史について簡単に触れていきましょう。  

# 近代以前の暗号

### シーザー暗号
暗号の歴史は古く、有名なものでは、紀元前1世紀ごろに、ローマ帝国の皇帝[ユリウス・カエサル](https://ja.wikipedia.org/wiki/%E3%82%AC%E3%82%A4%E3%82%A6%E3%82%B9%E3%83%BB%E3%83%A6%E3%83%AA%E3%82%A6%E3%82%B9%E3%83%BB%E3%82%AB%E3%82%A8%E3%82%B5%E3%83%AB)が使用したシーザー暗号が有名です。  
これは、元の文字をアルファベット順にずらすことで、敵に読まれないようにする暗号の手法です。

```ex:例
hello -> khoor
```

### ヒエログリフ
今わかっている中で、もっとも古い暗号は、紀元前19世紀ごろの、古代エジプトの石碑に書かれているヒエログリフだと言われています。

> ![ヒエログリフ](https://upload.wikimedia.org/wikipedia/commons/c/ce/Egypt_Hieroglyphe2.jpg?20050415170236)  
> [wikipedia](https://commons.wikimedia.org/wiki/File:Egypt_Hieroglyphe2.jpg)より引用

### スキュタレー暗号
古代ギリシャの都市国家[スパルタ](https://study-z.net/100112233)では、スキュタレー暗号が使われていました。  
これは、棒状の布に文字を書いて、ある太さの木の棒に巻きつけた時だけ、文章が浮かび上がる作りになっていました。

> ![スキュタレー暗号](https://upload.wikimedia.org/wikipedia/commons/5/51/Skytale.png?20070220183311)  
> [wikipedia](https://commons.wikimedia.org/wiki/File:Skytale.png)より引用

### 蜘蛛の経路
日本にも暗号は残っています。その一つに蜘蛛の経路というものがあります。  
この暗号は、四角い形に平文を並べ、それを決められた順序でジグザグに読んでいく暗号です。

> 平文：吉備真備の蜘蛛の経路の暗号じゃい  
> ![経路](http://contest.japias.jp/tqj2007/90242/photo41.jpg)  
> ![経路](http://contest.japias.jp/tqj2007/90242/kumo2.gif)  
> [暗号の分類](http://contest.japias.jp/tqj2007/90242/framepage-tenti.html)より引用

### アナグラム
小説などで度々登場するものにアナグラムがあります。アナグラムは、つづり字の位置を変えて、別の語句をつくることです。例えば、

```ex:例
evil(悪) -> live(生)
```

といった感じです。[ハリーポッター](https://warnerbros.co.jp/franchise/wizardingworld/)のアナグラムは有名ですね。

```ex:例
I am Lord Voldemort.(私はヴォルデモート卿だ) -> Tom Marvolo Riddle(トム・マールヴォロ・リドル)
```

> ![画像](https://assets.media-platform.com/bi/dist/images/2020/12/23/5f15ad41191824564862f2bc-w1280.jpg)  
> [『ハリー・ポッター』ファンも知らない？ ヴォルデモート卿に関する18の事実 | Business Insider Japan](https://www.businessinsider.jp/post-226742)より引用

# 近代の暗号

### エニグマ
近代に入ってからは、機械を使って暗号化と復号を行うようになります。その中で、第二次世界大戦にドイツで使われた「エニグマ」があります。  
これは、ローター(暗号円盤)と呼ばれる装置が暗号に変換する暗号機です。  
エニグマは、敵の手に渡っても、鍵が解らなければ暗号を解読することができないように設計されていました。  
そのため、当時は解読が不可能な暗号機と言われていました。

> ![エニグマ暗号機](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/EnigmaMachineLabeled.jpg/1280px-EnigmaMachineLabeled.jpg)  
> [wikipedia](https://ja.wikipedia.org/wiki/%E3%82%A8%E3%83%8B%E3%82%B0%E3%83%9E_(%E6%9A%97%E5%8F%B7%E6%A9%9F)#/media/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:EnigmaMachineLabeled.jpg)より引用

最終的には、イギリス軍によって解読されてしまい、第二次世界大戦の終戦を決定づける一つになったとされています。  
この時、暗号解読に関わった[アラン・チューリング](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%A9%E3%83%B3%E3%83%BB%E3%83%81%E3%83%A5%E3%83%BC%E3%83%AA%E3%83%B3%E3%82%B0)はチューリングマシンなど、現在のコンピュータや人工知能(AI)にも深く関わっている人です。

最近の暗号は、暗号アルゴリズムを公開しても、鍵が解らないと解読できない性質を持っているべきだという考え方が一般的です。一般に公開することで、誰でもその安全性を検討でき、それが、より高い安全性に繋がると考えられています。

結局エニグマは破られてしまいましたが「仕組みがわかっても鍵が解らないと解読できない」という性質は、現在でも重要な暗号の考え方として残っています。

# 最後に
今回は、色々な暗号について見てきました。歴史上には、他にも多くの暗号があります。  
興味が湧いたら、自分で調べたり、プログラミングが得意な人は、実装してみるのも面白いでしょう。

# 参考文献

- [Software Design 2022年3月号｜技術評論社](https://gihyo.jp/magazine/SD/archive/2022/202203)