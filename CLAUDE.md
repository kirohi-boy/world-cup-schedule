# world-cup-schedule

2026年サッカーW杯のスケジュールを把握・表示するWebアプリケーション。

## プロジェクト概要

- **目的**: 2026年FIFAワールドカップのスケジュール確認・管理
- **技術スタック**: HTML / CSS / JavaScript（バニラ）
- **対象ブラウザ**: モダンブラウザ（Chrome, Firefox, Safari, Edge）

## ディレクトリ構成（想定）

```
world-cup-schedule/
├── CLAUDE.md
├── index.html        # メインページ
├── css/
│   └── style.css     # スタイルシート
├── js/
│   └── main.js       # メインスクリプト
└── data/
    └── schedule.json # 試合スケジュールデータ
```

## 開発ルール

- フレームワーク・ライブラリは使用せず、バニラJS で実装する
- `data/schedule.json` にスケジュールデータを集約し、JS側でフェッチして描画する
- CSSはモバイルファーストで記述する
- コメントは原則不要。変数名・関数名で意図が伝わるように命名する

## よく使うコマンド

```bash
# ローカルサーバー起動（Python）
python3 -m http.server 8080

# ローカルサーバー起動（Node.js npx）
npx serve .
```

## データ形式（schedule.json）

```json
[
  {
    "matchId": 1,
    "stage": "グループステージ",
    "group": "A",
    "date": "2026-06-11",
    "time": "21:00",
    "timezone": "JST",
    "homeTeam": "国名",
    "awayTeam": "国名",
    "venue": "スタジアム名",
    "city": "開催都市"
  }
]
```

## GitHubリポジトリ

https://github.com/kirohi-boy/world-cup-schedule

## 注意事項

- 試合時刻はJST（日本標準時）で統一する
- 2026年W杯はアメリカ・カナダ・メキシコの3か国共同開催
- 開幕: 2026年6月11日 / 決勝: 2026年7月19日
