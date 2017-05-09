# react-redux-todo

* Reduxの勉強のため、React + ReduxでTODOアプリを作成します。

## データの流れ

* Action -> Reducer -> Store

>Action : 

>Reducer : StateとActionを受け取り、新しいStateを返すもの

>Store : Stateを保持するもの

## フォルダ構成

* スタートは ```src/index.js```

### src配下のみ

* actions
    - Actionを生成するActionCreatorメソッドの配置先
* components
    - Reactのコンポーネントを置いている
    - 今回は例外でaddtodoはRedux特有のコンテナも含んでいる(小さすぎるので一緒にした)
* containers
    - Redux特有のコンテナの配置先
    - Reduxで管理しているstateをReactのComponentに渡してあげている
* reducers
    - 新しいstateを返すreducersの配置先
    - stateを変化させれるのはreducerのみ
