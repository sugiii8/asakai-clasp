# 会社の朝会通知を gas+clasp でやってみた

## 内容

- 話すことがない人用にお題を提供する
- 時々特別コンテンツを実施する（ゲーム・瞑想・ヨガなど）
- メンバーをシャッフルして２チームに分ける。それぞれ別の room でしゃべるので。
- 上記の情報をテキストにして slack で通知する

## 構成

- clasp
- typescript
- ES modules にしてファイル分割
- Webpack でローカルビルドして clasp に push
- 申し訳程度にテスト(jest)があります

## script

```
  "scripts": {
    "test": "jest",
    "build": "webpack",
    "push": "npm run build && clasp push",
    "open": "clasp open"
  },
```
