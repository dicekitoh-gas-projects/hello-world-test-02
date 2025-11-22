# GitHub Actions × GAS 自動デプロイテスト

このリポジトリは、GitHub ActionsでGoogle Apps Script (GAS) への自動デプロイをテストするためのプロジェクトです。

## 🚀 機能

- `git push` で自動的にGASにコードがデプロイされます
- Hello World関数とタイムスタンプ機能を含んでいます

## 📝 セットアップ

1. GitHub Secretsに `CLASPRC_JSON` を設定
2. mainブランチにpushするだけで自動デプロイ開始

## 🎯 対象GASプロジェクト

- **プロジェクト名**: Hello World Mac Min
- **Script ID**: 1hRpaHDz2UD_JcuEtUThfmjPblGjTbi5p0tNEVLPC96yQ6nMhP1rPyOTr
- **URL**: https://script.google.com/d/1hRpaHDz2UD_JcuEtUThfmjPblGjTbi5p0tNEVLPC96yQ6nMhP1rPyOTr/edit

## 📂 ファイル構成

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions設定
├── .clasp.json               # GASプロジェクト設定
├── .gitignore               # Git除外ファイル
├── Code.js                  # メインのGASコード
└── README.md                # このファイル
```

## 🔧 使用方法

1. ローカルでコードを編集
2. `git add .` → `git commit` → `git push`
3. GitHub Actionsが自動実行されてGASに反映