## URL

https://yukihira-official.herokuapp.com/

## 管理者権限用パスワード

ユーザー名：admin
パスワード：admin1111

ユーザー名：admin2
パスワード：admin2222

## news テーブル

| Column | Type   | Options     |
| ------ | ------ | ----------- |
| title  | string | null: false |
| text   | text   | null: false |

## contact テーブル

| Column  | Type   | Options     |
| ------- | ------ | ----------- |
| name    | string | null: false |
| email   | string | null: false |
| subject | string | null: false |
| message | text   | null: false |

## news テーブル

| Column  | Type    | Options     |
| ------- | ------- | ----------- |
| title   | string  | null: false |
| text    | text    | null: false |
| user_id | integer | null: false |

<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
* ...
=======
>>>>>>> Stashed changes
## users テーブル

| Column             | Type   | Options     |
| ------------------ | ------ | ----------- |
| name               | string | null: false |
| email              | string | null: false |
| encrypted_password | string | null: false |

### Association

- belongs_to :user
- has_many :news

## 工夫したところ

<<<<<<< Updated upstream
・ページを 7 ページ作ったところ。  
・フッターにて管理者権限ログイン、ログアウトができます。  
・機能としてはニュースページにて管理者権限を持つユーザーに対してのみ投稿、削除、編集が可能です。  
・管理者は自分が投稿した記事のみ削除、更新ができます。  
=======
・ページを 21 ページ作りました。  
・フッターにて管理者権限ログイン、ログアウトができます。  
・機能としてはニュースページにて管理者権限を持つユーザーに対してのみ投稿、削除、編集が可能です。  
・管理者は自分が投稿した記事のみ削除、編集ができます。  
>>>>>>> Stashed changes
・カルーセル機能は slick を使用しました。  
・お問合せフォームページでは実際に自分の gmail にお問合せのメールが届く仕組みになっています。  
・フォームには 2 段階認証の recaptcha を使用しました。  
・また、フォームにていくつかのバリデーション設定をし、テストもできています。（spec ファイルにて。）  
・ホームの画面ではニュースの最新記事が表示される様にしています。  
・また各種アイコン、URL を押すとそれぞれのページに遷移します。
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
