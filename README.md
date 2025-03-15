This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

<div id="top"></div>

## 使用技術一覧

1. Next.js (App Router) - React ベースのフレームワーク（SSR・SSG 対応）
2. Tailwind CSS - CSS ユーティリティフレームワーク
3. Google Fonts - パフォーマンス重視のフォント管理
4. Prisma - データベース ORM
5. TypeScript - 静的型付けによる安全性の向上
6. Auth.js - 認証の処理・管理
7. supabase - データベース

## 目次

1. [プロジェクトについて](#プロジェクトについて)
2. [環境](#環境)
3. [ディレクトリ構成](#ディレクトリ構成)
4. [開発環境構築](#開発環境構築)

<!-- プロジェクトについて -->

## プロジェクトについて

Next.js Auth.js Prisma supabase 　で Magic Link を実装するためのテンプレート

## 環境

<!-- 言語、フレームワーク、ミドルウェア、インフラの一覧とバージョンを記載 -->

| 言語・フレームワーク | バージョン    |
| -------------------- | ------------- |
| React                | 19.0.0        |
| React DOM            | 19.0.0        |
| Next.js              | 15.2.2        |
| NextAuth.js          | 5.0.0-beta.25 |
| Prisma               | 6.5.0         |
| Tailwind CSS         | 4.x           |
| ESLint               | 9.x           |
| TypeScript           | 5.x           |
| Node.js              | 20.x          |
| @auth/prisma-adapter | 2.8.0         |
| Prisma               | 6.5.0         |

その他のパッケージのバージョンは package.json を参照してください

<p align="right">(<a href="#top">トップへ</a>)</p>

## ディレクトリ構成

<!-- Treeコマンドを使ってディレクトリ構成を記載 -->

src 以下のディレクトリ構成

<pre>
.
|   .env
|   .env.example
|   .gitignore
|   components.json
|   eslint.config.mjs
|   next-env.d.ts
|   next.config.ts
|   package-lock.json
|   package.json
|   postcss.config.mjs
|   README.md
|   tsconfig.json
└─src
    ├─app
    │  ├─api
    │  │  └─auth
    │  │      └─[...nextauth]
    │  └─signOut
    ├─components
    │  └─ui
    ├─configuration
    ├─lib
    ├─styles
    └─types
</pre>

---

## フォルダ・ファイルの説明

### 📁 app フォルダ

Next.js の App Router に準拠した、ページとルーティングの管理。

- **`layout.tsx`**

  - 共通の HTML 構造を定義し、Google Fonts (`Geist`, `Geist_Mono`) を設定。
  - 全ページに適用されるスタイルとメタデータを管理。

- **`page.tsx`**

  - ホームページの表示。サインインフォームをレンダリング。

- **`sign-out/page.tsx`**
  - シンプルなサインアウト表示用ページ。

### 📁 components フォルダ

再利用可能なコンポーネント群。

- **`sign-in.tsx`**

  - 名前、メールアドレスを入力後、認証処理を実行するフォーム。

- **`ui/button.tsx`**
  - 汎用的なボタン。複数のスタイル・サイズを提供。

### 📁 configuration フォルダ

アプリケーション設定や初期化を管理。

- **`auth-config.ts`**

  - 認証に関する設定（OAuth プロバイダー、コールバック URL など）。

- **`auth.ts`**

  - 認証関連のミドルウェアやロジックを実装。

- **`prisma.ts`**
  - Prisma クライアントの初期化とデータベース接続設定。

### 📁 lib フォルダ

汎用的な処理をまとめたユーティリティ。

- **`auth-action.ts`**

  - サインインフォームの送信時に呼び出される認証処理アクション。

- **`send-request.ts`**

  - API リクエストを簡易に行うためのユーティリティ関数。

- **`utils.ts`**
  - 共通で使用するユーティリティ関数（例：クラス名の動的結合など）。

### 📁 styles フォルダ

- **`globals.css`**
  - Tailwind CSS をベースとしたグローバルスタイル設定。
  - ダークモード対応、カラーテーマ、カスタム変数を設定。
  - `tailwindcss-animate`プラグインを利用しアニメーション効果を提供。

### 📁 types フォルダ

プロジェクト内で使用する型定義ファイル。

- **`index.d.ts`**
  - プロジェクト全体のカスタム型定義をまとめて提供し、TypeScript による型安全性を確保。

### 📁 middleware フォルダ

全ページ共通のミドルウェア処理。

- リクエスト処理やセキュリティ対策、ルート保護などのグローバルな処理を実装。

---

## 🔧 セットアップ方法

### 1. リポジトリのクローン

```bash
git clone <repository-url>
cd <repository-directory>


```

### 2. 開発環境

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

[http://localhost:3000]を開く
