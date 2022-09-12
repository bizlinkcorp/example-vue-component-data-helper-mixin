# example-vue-component-data-helper-mixin

## 初めに

vue-component-data-helper-mixin を利用した画面サンプル。

### 画面イメージ

- vue-component-data-helper-mixin 使用コンポーネント
  - `src/components/item/StoreInputText.(ts|vue)`
  - `src/mixins/InheritStoreBindMixin.ts`
  - `src/mixins/InheritStorePathMixin.ts`
- テンプレート画面
  - `src/templates/ProductTemplate.(ts|vue)`
- 業務画面
  - `src/views/(Hatchu|Juchu|Mitsumori|Shukka)View.(ts|vue)`

### コンセプト

- 業務上似た画面をラベル違いで表示する。
- 業務処理の変更点（処理、データ、ラベル情報）は業務画面ごとに設定する

## 初期セットアップ

```sh
npm ci
```

## 開発サーバ起動方法

```sh
npm run serve
```
