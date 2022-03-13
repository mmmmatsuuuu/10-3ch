---
title: "02暗号とは"
date: "2022/3/2 23:27:00"
category: "over-the-fence"
topics: ["暗号とは(復習)"]
published: false
---

動画URL

# 情報セキュリティ

私たちが、コンピュータやインターネットを、安心して利用するためには、情報の盗聴や、改ざん、破壊などの不正行為や不慮の事故に対応し、情報を常に安全な状態にしておく必要があります。
情報が安全な状態とは、どのような状態でしょうか。もう少し一般化して考えてみましょう。

### 機密性
例えば、肌身離さず持っているスマートフォンには、自分の情報がいっぱいです。
もちろん自分は、スマートフォンの中身を見られないと困りますが、他の人には見られたくありません。
そこで、パスワードや指紋認証、顔認証などを使用して、自分以外の人には見られないようにします。
このように、大切な情報は認められた人だけが、アクセスすることができる性質を持つ必要があります。
このような性質を**機密性**と言います。

### 完全性
大切な情報は、もちろん破壊されても困ります。パスワードをかけたスマートフォンは、確かに中身を見られることはないでしょう。
しかし、スマートフォンを壊すことで、中の情報を破壊することは可能です。
この時に、中の情報をクラウド上にコピーしておけば、情報を破壊されることはありません。
このように、情報が破壊、または改ざん・消去されていない状態を確保する性質を**完全性**と言います。

### 可用性
クラウドにコピーをしたはいいものの、圏外で電波が届かず、情報にアクセスできなくなりました。
今、どうしてもその情報が必要なのに困りましたね。
大切な情報は、必要時に中断することなく、情報にアクセスできる状態を確保する必要もあり、この性質を**可用性**と言います。

### 情報セキュリティの３要素
ここまでに紹介した、機密性・完全性・可用性の３つの性質を確保することを**情報セキュリティ**と言います。

暗号は、この情報セキュリティを守るために、存在します。

# 暗号技術

## 暗号
特定の相手だけに、情報を伝えたい場合、その相手だけが読める形にして、情報を送ることが一番確実です。
送っている途中で、誰かに見られても読めないからです。
この、特定の相手だけに読める形にしたものが、**暗号**になります。

第１回の[暗号の歴史](/over-the-fence/cryptography/01historyOfCrypto/)で紹介したシーザー暗号を例に見てみましょう。


### シーザー暗号を使ったメッセージの送信
アリスはボブに以下のメッセージを送りたいと考えています。

```msg:もとのメッセージ
Hello I am Alice
```

しかし、メッセージを盗聴しようと企んでいる悪い人、イブが存在します。
そこで、イブに盗聴されても大丈夫なように、メッセージを暗号化して、送ることにしました。
使う暗号化の手法はシーザー暗号です。

シーザー暗号はアルファベット順に文字をずらします。
ここでは、アリスは３文字ずらすことにしたので、暗号にしたメッセージは次のようになります。

```msg:暗号化したメッセージ
Khoor L dp Dolfh
```

もちろん、ボブには事前にこのことを、伝えています。

このメッセージを実際にボブに送りました。
途中、運悪くイブに盗聴されてしまいましたが、イブはメッセージを理解することができませんでした。

一方、ボブは、事前に暗号のことを知っていたので、３文字逆にずらして、もとのメッセージに戻し、内容を知ることが出来ました。

### 暗号の世界での用語
これまでの例について、暗号の世界では、次のように名前をつけています。

- もとのメッセージのことを**平文**と言います。
- 暗号化したメッセージのことを **暗号文\(または暗号\)** と言います。
- アリスがしたように、平文から暗号文にすることを**暗号化**と言います。
- ボブがしたように、暗号文を平文に戻すことを**復号**と言います。
- 「アルファベット順にずらす」のように、暗号化・復号の処理の手順を**暗号アルゴリズム**と言います。
- 「３文字ずらす」のように、暗号化・復号の際に用いる平文とは独立した情報のことを**鍵**と言います。

シーザー暗号では、「１文字ずらす」から「２６文字ずらす」の２６種類の鍵が存在します。
つまり、イブは少し面倒ですが、「１文字ずらす」から「２６文字ずらす」の２６通りを試せば、もとのメッセージを知ることができます。

第１回の[暗号の歴史](/over-the-fence/cryptography/01historyOfCrypto/)のエニグマのところでも話ましたが、現在の暗号の考え方では、暗号アルゴリズムを隠しておくことは、得策とはされていません。
なぜなら、隠しておけないからです。隠しておけるならば、そもそも暗号は要りませんよね。

今回は２６通り試せば、暗号を突破出来ます。これが、１０００通りや１００００通り試さなければいけないとなると、イブは途中で諦めてしまうかもしれません。
つまり、使える鍵の種類が、その暗号の強さになります。鍵の種類が多いと、それだけ試さなければいけないパターンも多くなります。

鍵の種類は、鍵の長さに比例します。
ここでいう鍵の長さとは、桁数のことです。シーザー暗号は最大で「２６文字ずらす」の２桁ですね。
コンピュータの世界では、ビットを使って物事を表すので、ビットの桁数が鍵の長さになります。

暗号の世界では、次のように名前をつけています。

- 使用できる鍵の種類の多さのことを**鍵空間**と言います。
- ビットの桁数などの、鍵の長さのことを**鍵長**と言います。

ここで、用語について整理しておきましょう。

|用語|意味|
|----|----|
|平文|もとの情報|
|暗号(暗号文)|第三者が見てもわからないように変換したもの|
|暗号化|平文から暗号へ変換すること|
|復号|暗号から平文に戻すこと|
|暗号アルゴリズム|暗号化や復号の処理を行う際の手順|
|鍵|暗号化や復号の際に用いる平文とは独立した情報|
|鍵空間|使用できる鍵の種類の多さ|
|鍵長|鍵の長さ。一般にビット(bit)で表す。|

これらは、シーザー暗号に限らず、色々な暗号の手法に共通しているので、用語として名前がついています。

## ハッシュ関数

### ハッシュ関数とは
少し変わった暗号技術にハッシュ関数というものがあります。
ハッシュ関数とは、任意の長さのメッセージから、決まった長さのデータを生成する関数です。
生成されたデータを**ハッシュ値**と呼びます。

次の例は、メッセージからハッシュ値を生成したものです。

```msg:MD5
もとのメッセージ　　: Hello I am Alice
生成されたハッシュ値: c66660942e5eeaa6de5013cb3e286daf
```

ハッシュ関数は、次のような特徴があります。

- もとのデータとハッシュ値の間に規則性がない。
- 異なるメッセージからは、異なるハッシュ値が生成される。
- ハッシュ値からもとのデータを効率よく求めることが出来ない。
- 同じハッシュ値になるもとのデータを容易に見つけることが出来ない。

これらの特徴から、メッセージが改ざんされているかを、確認するのに利用されています。

### ハッシュ関数を使った改ざんの防止
例えば、AliceからBobに次のようにメッセージと生成したハッシュ値を送信するとしましょう。
ハッシュ値は、事前にBobと打ち合わせた鍵で暗号化して送ります。

```msg:AliceからBobに送られるメッセージ
もとのメッセージ　: Hello I am Alice
生成したハッシュ値: c66660942e5eeaa6de5013cb3e286daf
```

途中イブが、次のようにメッセージを改ざんします。

```msg:改ざんされたメッセージ
改ざんされたメッセージ: I hate you
```

ボブは、イブが改ざんしたメッセージを受け取ることになります。
ボブは、鍵を使って暗号化されたハッシュ値を復号します。

```
ハッシュ値: c66660942e5eeaa6de5013cb3e286daf
```

また、送られてきたメッセージから、ハッシュ関数を使用して、ハッシュ値を求めます。

```
ハッシュ値: d2ec37d88bcbc82daf652c2a0a50d123
```

もちろん、改ざんされたもとのメッセージと異なるメッセージからハッシュ値を求めるので、復号したハッシュ値とは異なるものになります。
よって、改ざんされていることが、わかります。
もとのハッシュ値は暗号化されているので、イブは、もとのハッシュ値を知ることが出来ません。よって、ハッシュ値自体を改ざんすることも不可能です。

# 終わりに

このように、暗号で機密性を、ハッシュ関数で完全性を、といったふうに暗号技術は、情報セキュリティを実現するために大切な技術になります。