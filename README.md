# VDice-Bot

VTuber ランダム選出をする Bot

## 使用方法

Bot をサーバに招待すると、全ての新着メッセージを監視してコマンドに反応します。

### 現在実装されているコマンド

全て文頭にある場合のみ反応します。

- `!nijidice {n}`: にじさんじからランダム選出
- `!nijifem {n}`: にじさんじ（女性）からランダム選出
- `!nijimas {n}`: にじさんじ（男性）からランダム選出
- `!hololive {n}`: ホロライブからランダム選出
- `!dice <n>d<m>`: ダイスを振る
- `!pick {n} [<選出対象(,、区切り)>]`: 与えられた中からランダム選出、キーワード展開対応

### キーワード

`!pick`コマンドは以下のキーワードを自動展開します。キーワードの大文字小文字は区別しません。  
例: `!pick [NijiFem,Holo]` → にじさんじ女性・ホロライブから選出

#### にじさんじ

- `Niji`: にじさんじ JP
- `NijiFem`: にじさんじ JP（女性）
- `NijiMas`: にじさんじ JP（男性）
- `NijiEn`: にじさんじ EN
- `NijiEnFem`: にじさんじ EN（女性）
- `NijiEnMas`: にじさんじ EN（男性）
- `NijiKr`: にじさんじ KR
- `NijiKrFem`: にじさんじ KR（女性）
- `NijiKrMas`: にじさんじ KR（男性）
- `NijiId`: にじさんじ ID
- `NijiIdFem`: にじさんじ ID（女性）
- `NijiIdMas`: にじさんじ ID（男性）

#### ホロライブ

- `Holo`: ホロライブ JP
- `Holostars`: ホロスターズ
- `HoloId`: ホロライブ ID
- `HoloEn`: ホロライブ EN（下 2 ユニット + 「アイリス」）
- `Myth`: Myth
- `Council`: Council

#### 774 inc.

- `774inc`: 774 inc. （以下の全て + 「宗谷いちか」）
- `Animare`: あにまーれ
- `HoneyStrap`: ハニーストラップ
- `VApArt`: ブイアパ
- `SugarLyric`: シュガーリリック
- `HiyoCro`: 緋翼のクロスピース

#### その他

- `DotLive`: .LIVE
- `Vspo`: ぶいすぽっ！
- `Aogiri`: あおぎり高校

## 実行

### 前提ツール

- VSCode (devcontainerが使えればそれ以外のエディタも可)

### 実行にあたっての準備

- `.env`を作成し、環境変数`BOT_TOKEN`を設定する (`.env.sample`を参照)

### 開発時

devcontainerの作成時に `npm ci` が実行されるため、依存関係のインストールは不要。

- `$ npm run dev`で Bot を稼働できる。
- `$ npm run lint`でリンター・フォーマッタが動く

### 本番実行時

`docker compose up`で起動します。
