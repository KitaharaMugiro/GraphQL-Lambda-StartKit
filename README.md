# 概要
GraphQLサーバをApollo + TypeScriptで構築し、Lambdaにデプロイする。
参照元は https://github.com/serverless/examples/tree/master/aws-node-typescript-apollo-lambda

# 使い方
npxが使用できる環境で、以下のコマンドを実行する。

```
npx degit https://github.com/KitaharaMugiro/GraphQL-Lambda-StartKit <Directory Name>
```

サービス名、ロール名、テーブル名などを変更ののち利用する。IDではなくサービス名で同一性を判断している可能性がある。

# 内容

- [x] TypeScript対応
- [x] Apolloサーバ
- [x] Query
- [x] Mutation
- [x] DynamoDBとの接続
- [x] ServerlessFrameworkを利用したデプロイ
- [ ] 
- [ ] 
- [ ] 

# ServerlessFrameworkを利用したデプロイ
前提: CLIインストール済み(https://www.serverless.com/framework/docs/getting-started/)

① 以下の環境変数をセットする。

```
AWS_ACCESS_KEY_ID=accesskey
AWS_SECRET_ACCESS_KEY=sshhh
```

② コマンド`npm run deploy`でデプロイする


## デモ
npm run devでplaygroundを開き、右側のdocumentを見てクエリを確認できる

## Dynamoとの接続テスト
ローカル

```
sls invoke local -f hello
```

本番

```
sls invoke -f hello
```
