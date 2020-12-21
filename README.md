# お品書き

## 用意しておくもの

### on local
* node v14.15.0

### on docker
* docker v17.03~
* docker-compose v1.10.0~

### how to start

```
$ cp -p docker-compose.yml docker-compose.local.yml # edit as you like
$ docker-compose -f docker-compose.local.yml build 
$ docker-compose -f docker-compose.local.yml run --rm app yarn install
$ docker-compose -f docker-compose.local.yml up -d
```

see http://localhost:3000

## 今日学ぶこと

* 安全にreactを書くための実践的ポイント
* 関数型プログラミングの初歩

### 1. props/stateのreadonly化

readonlyというマークをつけて、TypeScriptで再代入・変更操作を禁止する事が可能

### 2. DOMの描画とデータ処理をできるだけ分離する

副作用（関数の外に一切影響を与えない）が無いようにロジックを実装して、
DOMの描画とデータ処理を分離して、テストできる対象を増やします

```js
/* 副作用アリ 1
 * 関数外の変数を参照(変更)する. とてもテストしにくい.
 */
let outside = 1;
const withSideEffect1_1 = () => {
  outside = 2
  return
};

const withSideEffect1_2 = () => {
  return outside;
};

/* 副作用アリ 2,
 * 引数にとった関数に破壊的変更を加えている.
 * 関数の外で引数objに渡されたobjectを参照していた場合に、外側に影響がある
 */
const withSideEffect2 = (obj) => {
  obj['key'] = 'value';
};

// 副作用ナシ 
const withoutSideEffect = (obj) => {
  return {
    ...obj,
    key: 'value'
  }
};
```

JavaScriptのオブジェクトは第1級オブジェクト、と言っており変数への代入など、
その他のnumber/stringなどの値と同様に扱える
(Rubyだと工夫必要)

`const f = (a: number, b:number): number => { a + b }`

`(id: number) => void` これは、stringやnumberと同じように、
「number型の引数idをとって戻り値を返さない関数」という「一つの型」

`(message: string) => (id: number) => void`
「string型の引数をとって、『number型の引数idをとって戻り値を返さない関数』を返す」という「一つの型」

関数をreturnする関数なので高階関数(higher order function)

### 3. stateの設計
stateには常に、最小のデータで設計する事。
例えば、 `「総合点数」=「芸術点」+「技術点」` というロジックが会った時に、「総合点数」はstateに持たせない。
独立して持たせるとデータの不整合に繋がるので、「芸術点」と「技術点」だけを持たせて、毎回必ず計算する。


## 宿題
### 1. コードの修正
今日習った内容を用いて、自分のコードを修正してみてください。
* eventHandlerのfunctionを、高階関数で生成する
* その高階関数をjestでunittest書く 
  * `yarn test` で jestが実行出来ます
* ついでにvalidationも実装してみる

### 2. (challenge)
useStateの代わりに、useReducerを使って今回のアプリケーションをリファクタリングしてください.
(reducerの詳細は次回）