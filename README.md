# MiraiBlog

読みやすさにこだわった、マークダウンでプレゼンテーションも作れるシンプルなマークダウンのブログです。

今は開発中です。しばらくかかります。

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# File Tree
## app/
Contains the controllers, models, views, helpers, mailers, channels, jobs and assets for your application. You'll focus on this folder for the remainder of this guide.

アプリケーションのコントローラ、モデル、ビュー、ヘルパー、メーラ、チャネル、ジョブ、およびアセットが含まれます。 このガイドの残りの部分では、このフォルダに焦点を当てます。

## app/views

*.erbのViewファイルを置く

## app/views/layouts

共通？の*.erbファイルが置かれる

## app/views/articles
## app/views/comments
## app/views/welcome

articles、comments、welcomeコントローラ毎にViewファイル（*.erb）を置く、あらかじめ決められた場所
部分(partial)ファイルは接頭辞としてアンダースコアを付ける

アクション名と同じ名前のViewファイル（*.erb）を呼び出す場合は、
コントローラでrender（render "new"）を省略できる

## bin/
Contains the rails script that starts your app and can contain other scripts you use to setup, update, deploy or run your application.

あなたのアプリケーションを起動するレールスクリプトを含み、アプリケーションの設定、更新、デプロイ、または実行に使用する他のスクリプトを含むことができます。

## config/
Configure your application's routes, database, and more. This is covered in more detail in Configuring Rails Applications.

アプリケーションのルート、データベースなどを構成します。 詳細は、「Railsアプリケーションの設定」を参照してください。

## config.ru
Rack configuration for Rack based servers used to start the application. For more information about Rack, see the Rack website.

アプリケーションを起動するために使用されるラックベースのサーバのためのラック構成。 ラックの詳細については、ラックのWebサイトを参照してください。

## db/
Contains your current database schema, as well as the database migrations.

現在のデータベーススキーマとデータベース移行が含まれます。

## db/seeds.rb

下記の様にtitleモデルのcreateをseeds.rbファイルに記述を行い、
`rails db:seed`コマンドを実行することでテストデータを挿入できます。

```rb
# coding: utf-8

Title.create(:name => '宇宙に行った日', :sales_date => '2011-06-28')
Title.create(:name => '観察日記', :sales_date => '2011-11-14')
```

`rails dbconsole`コマンドでSQLiteのコマンドラインツールが開くので、
`select * from titles;`コマンドを実行することで
テストデータの中身の確認ができます。

## Gemfile, Gemfile.lock
These files allow you to specify what gem dependencies are needed for your Rails application. These files are used by the Bundler gem. For more information about Bundler, see the Bundler website.

これらのファイルを使用すると、Railsアプリケーションに必要なgemの依存関係を指定できます。 これらのファイルはBundler gemによって使用されます。 Bundlerの詳細については、BundlerのWebサイトを参照してください。

## lib/
Extended modules for your application.

アプリケーション用の拡張モジュール。

## log/
Application log files.

アプリケーションログファイル。

## package.json
This file allows you to specify what npm dependencies are needed for your Rails application. This file is used by Yarn. For more information about Yarn, see the Yarn website.

このファイルを使用すると、Railsアプリケーションに必要なnpm依存関係を指定できます。 このファイルはYarnによって使用されます。 Yarnに関する詳しい情報は、Yarnのウェブサイトをご覧ください。

## public/
The only folder seen by the world as-is. Contains static files and compiled assets.

世界で見られる唯一のフォルダです。
静的ファイルとコンパイル済みのアセットが含まれます。
静的HTMLやCSSなどはここに置く

## Rakefile
This file locates and loads tasks that can be run from the command line. The task definitions are defined throughout the components of Rails. Rather than changing Rakefile, you should add your own tasks by adding files to the lib/tasks directory of your application.

このファイルは、コマンドラインから実行できるタスクを検索して読み込みます。 タスク定義は、Railsのコンポーネント全体で定義されています。 Rakefileを変更するのではなく、アプリケーションのlib / tasksディレクトリにファイルを追加して、独自のタスクを追加する必要があります。

## README.md
This is a brief instruction manual for your application. You should edit this file to tell others what your application does, how to set it up, and so on.

これはアプリケーションの簡単な説明書です。 このファイルを編集して、アプリケーションの動作や設定方法などを他人に伝える必要があります。

## test/
Unit tests, fixtures, and other test apparatus. These are covered in Testing Rails Applications.

ユニットテスト、フィクスチャ、およびその他のテスト装置。 これらはテストレールアプリケーションで説明しています。

## tmp/
Temporary files (like cache and pid files).

一時ファイル（キャッシュやpidファイルなど）。

## vendor/
A place for all third-party code. In a typical Rails application this includes vendored gems.

すべてのサードパーティコードの場所。 典型的なRailsアプリケーションでは、これは販売された宝石を含みます。

## .gitignore
This file tells git which files (or patterns) it should ignore. See GitHub - Ignoring files for more info about ignoring files.

このファイルは、どのファイル（またはパターン）を無視するべきかをgitに伝えます。 ファイルを無視する方法の詳細については、「GitHub - ファイルを無視する」を参照してください。

## .ruby-version
This file contains the default Ruby version.

このファイルにはデフォルトのRubyバージョンが含まれています。

# Commands

## 必要モジュールをインストール

```sh
brew doctor
brew prune
brew update
brew upgrade

brew install libxml2 libxslt libiconv
```

## 必要モジュールが参照できる様にする

```sh
brew link --force libxml2
brew link --force libxslt

brew --prefix libiconv
brew --prefix libxml2
brew --prefix libxslt
```

## Railsのインストールに必要なモジュールをインストール

```sh
sudo gem install pkg-config 
sudo gem install nokogiri -- --use-system-libraries --with-iconv-dir="/usr/local/opt/libiconv" --with-xml2-config="/usr/local/opt/libxml2/bin/xml2-config" --with-xml2-include=/usr/include/libxml2 --with-xslt-config="/usr/local/opt/libxslt/bin/xslt-config" --with-xml2-lib=/usr/lib/

sudo gem install rails
```

## Railsのバージョン確認

```sh
rails --version
cd ..
```

## Railsに必要なモジュールをインストール

```sh
sudo gem install uglifier
sudo gem install turbolinks
sudo gem install web-console
```

## sqlite3はAndroidStudioのものがもともと入ってた

```sh
which sqlite3
/Users/kogahirotaka/Library/Android/sdk/platform-tools/sqlite3

brew reinstall sqlite3
```

http://guides.rubyonrails.org/getting_started.html

http://ruby.studio-kingdom.com/rails/guides/getting_started

## 新規アプリ(blog)を作成

```sh
sudo rails new mirai-blog
```

## 開発サーバを起動

```sh
cd mirai-blog
bin/rails server
```

http://localhost:3000/

## コントローラを生成

```sh
% bin/rails generate controller Welcome index
  create  app/controllers/welcome_controller.rb
    route  get 'welcome/index'
  invoke  erb
  create    app/views/welcome
  create    app/views/welcome/index.html.erb
  invoke  test_unit
  create    test/controllers/welcome_controller_test.rb
  invoke  helper
  create    app/helpers/welcome_helper.rb
  invoke    test_unit
  invoke  assets
  invoke    coffee
  create      app/assets/javascripts/welcome.coffee
  invoke    scss
  create      app/assets/stylesheets/welcome.scss
```

`mirai-blog/config/routes.rb`にも追記される

http://localhost:3000/welcome/index

`mirai-blog/config/routes.rb`に下記を追記すれば、ルートアクセスで「welcome#index」が呼び出させる。

```rb
root 'welcome#index'
```


## 全ルートを確認

https://guides.rubyonrails.org/routing.html

`mirai-blog/config/routes.rb`のルートなどが表示される

```sh
bin/rails routes
```

## Articleのルートとコントローラ生成

`mirai-blog/config/routes.rb`に`resources :articles`のCURDルート（RESTful）を追記

articleのコントローラを生成

```sh
% bin/rails generate controller Articles
  create  app/controllers/articles_controller.rb
  invoke  erb
  create    app/views/articles
  invoke  test_unit
  create    test/controllers/articles_controller_test.rb
  invoke  helper
  create    app/helpers/articles_helper.rb
  invoke    test_unit
  invoke  assets
  invoke    coffee
  create      app/assets/javascripts/articles.coffee
  invoke    scss
  create      app/assets/stylesheets/articles.scss
```

自動的にActionとViewを作成することが可能。`mirai-blog/config/routes.rb`には記述済みのため追記されず、viewも作られない。

`::rails generate controller コントローラ名 アクション名1 アクション名2 ...::`

アクション名と同名のViewも作成される。`mirai-blog/app/controllers/articles_controller.rb`にnewメソッドを追記。

```rb
def new
end
```

view（`mirai-blog/app/views/articles/new.html.erb`）を作る

```html
<%= form_with scope: :article, url: articles_path, local: true do |form| %>
  <p>
    <%= form.label :title %><br>
    <%= form.text_field :title %>
  </p>
 
  <p>
    <%= form.label :text %><br>
    <%= form.text_area :text %>
  </p>
 
  <p>
    <%= form.submit %>
  </p>
<% end %>
```

form_with の url: articles_path は デフォルトでarticlesにPOSTリクエストを送る。

POSTはcreateに関連づけられているので、コントローラのcreateメソッドが呼ばれる

*form_with は デフォルトでAjaxリクエストで送信する。local: trueで無効に。*

`mirai-blog/app/controllers/articles_controller.rb`にcreateメソッドを追記。

```rb
def create
  render plain: params[:article].inspect
end
```

ただ、プレーンテキストで、ActionController::Parameters（リクエストパラメータ）のarticleを表示するだけ


## Articleを操作するモデルを作成する

モデルクラスとDB作成のためのクラスが作成される

```sh
% bin/rails generate model Article title:string text:text
  invoke  active_record
  create    db/migrate/20190120064509_create_articles.rb
  create    app/models/article.rb
  invoke    test_unit
  create      test/models/article_test.rb
  create      test/fixtures/articles.yml
```

## railsのDBマイグレーションを実行（戻すことも可）

https://guides.rubyonrails.org/active_record_migrations.html

```sh
% bin/rails db:migrate
== 20190120064509 CreateArticles: migrating ===================================
-- create_table(:articles)
   -> 0.0022s
== 20190120064509 CreateArticles: migrated (0.0023s) ==========================
```

デフォルトで開発環境なので、config/database.ymlのdevelopmentセクションで定義されたデータベースに適用される。

本番環境に適用する時には、`bin/rails db:migrate RAILS_ENV=production`で明示的に実行する

`mirai-blog/app/controllers/articles_controller.rb`のcreateメソッドを、Articleモデルの新規作成と保存の処理に修正。

```rb
def create
  @article = Article.new(params[:article])
  @article.save
  redirect_to @article
end
```

この処理では不正な属性エラーになる。

セキュリティ的に許可する属性のホワイトリストを定義しないといけない。

（Strutsの脆弱性の様な事が起きない様に。）

http://weblog.rubyonrails.org/2012/3/21/strong-parameters/

```rb
def create
  @article = Article.new(article_params)
  @article.save
  redirect_to @article # showにリダイレクトされる
end
# :articleのパラメータが必須で、:title, :text属性以外が無いこと（ホワイトリスト）を判定。
# セキュリティ的に必須。
private
  def article_params
    params.require(:article).permit(:title, :text)
  end
```

`mirai-blog/app/controllers/articles_controller.rb`にshowメソッドを追記。

```rb
def show
  @article = Article.find(params[:id])
end
```

`mirai-blog/app/views/articles/show.html.erb`を作成

```html
<p>
  <strong>Title:</strong>
  <%= @article.title %>
</p>
<p>
  <strong>Text:</strong>
  <%= @article.text %>
</p>
```

http://localhost:3000/articles/new でTitleとTextを入力して、SaveArticleすると、article/showで保存結果が表示される。

http://localhost:3000/articles

全てのarticleを表示する、article/indexを作成する。

`mirai-blog/app/controllers/articles_controller.rb`にindexメソッドを追記。

```rb
def index
  @articles = Article.all
end
```

`mirai-blog/app/views/articles/index.html.erb`を作成

```html
<h1>Listing articles</h1>
<table>
  <tr>
    <th>Title</th>
    <th>Text</th>
    <th></th>
  </tr>
  <% @articles.each do |article| %>
    <tr>
      <td><%= article.title %></td>
      <td><%= article.text %></td>
      <td><%= link_to 'Show', article_path(article) %></td>
    </tr>
  <% end %>
</table>
```

http://localhost:3000/articles

画面遷移するリンクを追加する

`mirai-blog/app/views/welcome/index.html.erb`を変更

```html
<h1>Hello, Rails!</h1>
<%= link_to 'My Blog', controller: 'articles' %>
```

`mirai-blog/app/views/articles/index.html.erb`のtableタグのすぐ上に、下記を追記

```html
<%= link_to 'New article', new_article_path %>
```

`mirai-blog/app/views/articles/new.html.erb`と、`mirai-blog/app/views/articles/show.html.erb`の末尾に、下記を追記

```html
<%= link_to 'Back', articles_path %>
```

controller:オプションが無い場合、デフォルトで表示されている現在のコントローラになる。

http://localhost:3000/

バリデーションを追加する

`mirai-blog/app/models/article.rb`を下記の様に変更

```rb
class Article < ApplicationRecord
  validates :title, presence: true, length: { minimum: 5 }
end
```

`mirai-blog/app/controllers/articles_controller.rb`のcreateメソッドの`@article.save`と`redirect_to`の行を下記の様に置き換え

```rb
if @article.save
  redirect_to @article
else
  render 'new'
end
```

`mirai-blog/app/controllers/articles_controller.rb`のnewメソッドに下記の処理を追記

erbの@article.errors.any?がエラーを投げない様に追加

```rb
@article = Article.new
```

`mirai-blog/app/views/articles/new.html.erb`のformタグ内の一番上に、下記を追記

```html
<% if @article.errors.any? %>
  <div id="error_explanation">
    <h2>
      <%= pluralize(@article.errors.count, "error") %> prohibited
      this article from being saved:
    </h2>
    <ul>
      <% @article.errors.full_messages.each do |msg| %>
        <li><%= msg %></li>
      <% end %>
    </ul>
  </div>
<% end %>
```

エラーはfield_with_errorsのclassを持つdivで自動的に囲まれる。

Bootstrap4と連携する方法もある

https://qiita.com/kazuhisa/items/ed7d5f6823f7c8a04aa8#bootstrap4

articleの編集画面を表示するeditメソッドを追加する

`mirai-blog/app/controllers/articles_controller.rb`のeditメソッドを追記

```rb
def edit
  @article = Article.find(params[:id])
end
```

`mirai-blog/app/views/articles/edit.html.erb`を作成

```html
<h1>Edit article</h1>
<%= form_with(model: @article, local: true) do |form| %>
  <% if @article.errors.any? %>
    <div id="error_explanation">
      <h2>
        <%= pluralize(@article.errors.count, "error") %> prohibited
        this article from being saved:
      </h2>
      <ul>
        <% @article.errors.full_messages.each do |msg| %>
          <li><%= msg %></li>
        <% end %>
      </ul>
    </div>
  <% end %>
  <p>
    <%= form.label :title %><br>
    <%= form.text_field :title %>
  </p>
  <p>
    <%= form.label :text %><br>
    <%= form.text_area :text %>
  </p>
  <p>
    <%= form.submit %>
  </p>
<% end %>
<%= link_to 'Back', articles_path %>
```

articleを更新するupdateメソッドを追加する

`mirai-blog/app/controllers/articles_controller.rb`にupdateメソッドを追記

```rb
def update
  @article = Article.find(params[:id])
  if @article.update(article_params)
    redirect_to @article
  else
    render 'edit'
  end
end
```

idはarticle_paramsの判定は不要

`mirai-blog/app/views/articles/index.html.erb`のtableタグのtrタグ内にEditリンクを追加

```html
<td><%= link_to 'Edit', edit_article_path(article) %></td>
```

`mirai-blog/app/views/articles/show.html.erb`のBackリンクの直前にEditリンクを追加

```html
<%= link_to 'Edit', edit_article_path(@article) %>
```

http://localhost:3000/

Viewの重複を整理、パーシャルビューにnewとeditを対応させる

`mirai-blog/app/views/articles/_form.html.erb`を新規作成する

```html
<%= form_with model: @article, local: true do |form| %>
  <% if @article.errors.any? %>
    <div id="error_explanation">
      <h2>
        <%= pluralize(@article.errors.count, "error") %> prohibited
        this article from being saved:
      </h2>
      <ul>
        <% @article.errors.full_messages.each do |msg| %>
          <li><%= msg %></li>
        <% end %>
      </ul>
    </div>
  <% end %>
  <p>
    <%= form.label :title %><br>
    <%= form.text_field :title %>
  </p>
  <p>
    <%= form.label :text %><br>
    <%= form.text_area :text %>
  </p>
  <p>
    <%= form.submit %>
  </p>
<% end %>
```

form_withの詳細ついては、下記を参照する

http://api.rubyonrails.org/v5.2.2/classes/ActionView/Helpers/FormHelper.html#method-i-form_with-label-Resource-oriented+style

`app/views/articles/new.html.erb`と`app/views/articles/edit.html.erb`のform_withタグを下記に置き換える

```html
<%= render 'form' %>
```

`mirai-blog/app/controllers/articles_controller.rb`にdestroyメソッドを追記

```rb
def destroy
  @article = Article.find(params[:id])
  @article.destroy
  redirect_to articles_path
end
```

`mirai-blog/app/views/articles/index.html.erb`のtableタグのtrタグ内にDestroyリンクを追加

```html
<td><%= link_to 'Destroy', article_path(article), method: :delete, data: { confirm: 'Are you sure?' } %></td>
```

javascriptについては、Working with JavaScript in Rails　https://guides.rubyonrails.org/working_with_javascript_in_rails.html を参照

Rails的にはRESTfulが推奨 routingの詳細については https://guides.rubyonrails.org/routing.html を参照


## Articleのコメントを操作する二つ目のモデルを作成する

articleと関連するCommentモデルを作成する

```sh
% bin/rails generate model Comment commenter:string body:text article:references
  invoke  active_record
  create    db/migrate/20190121115049_create_comments.rb
  create    app/models/comment.rb
  invoke    test_unit
  create      test/models/comment_test.rb
  create      test/fixtures/comments.yml
```

`mirai-blog/app/models/comment.rb`がarticleへの関連付けありで作成される。

`mirai-blog/db/migrate/20190121115049_create_comments.rb`もarticleへの外部キー（id）有りで作成される。

railsのDBマイグレーションを実行、Commentのみ実行される

```
% bin/rails db:migrate
== 20190121115049 CreateComments: migrating ===================================
-- create_table(:comments)
   -> 0.0043s
== 20190121115049 CreateComments: migrated (0.0044s) ==========================
```

`app/models/article.rb`にcommentへの複数形の関連付けを追加する。（末尾はs）

```rb
class Article < ApplicationRecord
  has_many :comments # 追加
  validates :title, presence: true,
                    length: { minimum: 5 }
end
```

アクティブレコードの詳細については、下記を参照
https://guides.rubyonrails.org/association_basics.html

`mirai-blog/config/routes.rb`にcommentsルートを追加

```rb
resources :articles do
  resources :comments
end
```

https://guides.rubyonrails.org/routing.html

Articleのコメントのコントローラ生成

```
% bin/rails generate controller Comments
  create  app/controllers/comments_controller.rb
  invoke  erb
  create    app/views/comments
  invoke  test_unit
  create    test/controllers/comments_controller_test.rb
  invoke  helper
  create    app/helpers/comments_helper.rb
  invoke    test_unit
  invoke  assets
  invoke    coffee
  create      app/assets/javascripts/comments.coffee
  invoke    scss
  create      app/assets/stylesheets/comments.scss
```

`mirai-blog/app/views/articles/show.html.erb`にコメント追加欄を追加

```html
<h2>Comments</h2>
<% @article.comments.each do |comment| %>
  <p>
    <strong>Commenter:</strong>
    <%= comment.commenter %>
  </p>
 
  <p>
    <strong>Comment:</strong>
    <%= comment.body %>
  </p>
<% end %>
<h2>Add a comment:</h2>
<%= form_with(model: [ @article, @article.comments.build ], local: true) do |form| %>
  <p>
    <%= form.label :commenter %><br>
    <%= form.text_field :commenter %>
  </p>
  <p>
    <%= form.label :body %><br>
    <%= form.text_area :body %>
  </p>
  <p>
    <%= form.submit %>
  </p>
<% end %>
```

form_withはネストされたcommentsになる（`/articles/1/comments`）

`mirai-blog/app/controllers/comments_controller.rb`にcreateメソッドを追加。

```rb
def create
  @article = Article.find(params[:article_id])
  @comment = @article.comments.create(comment_params)
  redirect_to article_path(@article)
end
private
  def comment_params
    params.require(:comment).permit(:commenter, :body)
  end
```

## コメント機能のリファクタリング

`mirai-blog/app/views/comments/_comment.html.erb`を新規追加

```html
<p>
  <strong>Commenter:</strong>
  <%= comment.commenter %>
</p>
<p>
  <strong>Comment:</strong>
  <%= comment.body %>
</p>
```

`mirai-blog/app/views/comments/_form.html.erb`を新規追加

```html
<%= form_with(model: [ @article, @article.comments.build ], local: true) do |form| %>
  <p>
    <%= form.label :commenter %><br>
    <%= form.text_field :commenter %>
  </p>
  <p>
    <%= form.label :body %><br>
    <%= form.text_area :body %>
  </p>
  <p>
    <%= form.submit %>
  </p>
<% end %>
```

`mirai-blog/app/views/articles/show.html.erb`のコメント表示・追加処理を下記に置き換え

```html
<h2>Comments</h2>
<%= render @article.comments %>
<h2>Add a comment:</h2>
<%= render 'comments/form' %>
```

## コメントの削除機能を追加

`mirai-blog/app/views/comments/_comment.html.erb`の末尾に削除リンクを追加

```html
<p>
  <%= link_to 'Destroy Comment', [comment.article, comment], method: :delete, data: { confirm: 'Are you sure?' } %>
</p>
```

`mirai-blog/app/controllers/comments_controller.rb`にdestroyメソッドを追加

```rb
def destroy
  @article = Article.find(params[:article_id])
  @comment = @article.comments.find(params[:id])
  @comment.destroy
  redirect_to article_path(@article)
end
```

## 認証・セキュリティ周りを調べたい

Securing Rails Applications https://guides.rubyonrails.org/security.html

## Railsと組み合わせたいフレームワークやライブラリ

Docker、Vue.js（Vuex、VueRouter、https://vuetifyjs.com/ja/）、TypeScript、StoryBook、erb->slims、Bootstrap4（Reboot.css）

VSCodeのBrowser Preview拡張

## Railsチュートリアル

https://railstutorial.jp

## Rails6

Action Mailbox。メールの受信をRails側でキャッチし、DBに格納

Action Text。リッチテキストエリアが実装、画像もOK。

Multiple Database。複数のデータベース、スケーラブルにできたりするっぽい。

https://speakerdeck.com/eileencodes/railsconf-2018-the-future-of-rails-6-scalable-by-default?slide=142

2019年に正式リリース予定。使う？

## ドキュメント化

https://speakerdeck.com/ ＆ Markdown ＆ フローチャート

## scaffold機能を使う（モデル、コントローラとアクション、ビューを自動生成）

`rails generate scaffold モデル名 フィールド:型:(unique|index)`

「friend」モデルに「name」カラムと「address」カラムを持つコントローラとアクション、ビューを自動生成する

データの追加や閲覧といった基本的な機能を持つアプリケーションが作成される

ただし、マイグレーションスクリプトは起動前に実行する必要がある

型に:uniqueを付けるとプライマリキーになる

rails generate migrationコマンドまとめ
https://qiita.com/zaru/items/cde2c46b6126867a1a64

```
bin/rails generate scaffold friend name:string address:string
bin/rails db:migrate
```

# Dockerfile

docker build . -t kght6123/unit:latest

docker run -d -v $PWD/run:/var/run -p 3000:3000 --name unit1 kght6123/unit:latest

docker stop unit1

docker rm unit1

curl -X PUT -d @./start.json --unix-socket ./run/control.unit.sock http://localhost/config/

curl --unix-socket ./run/control.unit.sock http://localhost/config/

# docker-compose.yml

docker-compose build

docker-compose up -d

docker-compose down

docker-compose exec unit curl --unix-socket /var/run/control.unit.sock http://localhost/config/

nginx/unit:1.2-fullやlatestでエラーになる。

docker-compose exec unit curl -X PUT -d @/root/json/start.json --unix-socket /var/run/control.unit.sock http://localhost/

nginx/unit:1.2-fullやlatestでRubyが入ってない。1.2-ruby2.3ならOK。rubyだけのUnitにする。

docker-compose exec unit curl -X PUT -d @/root/json/start.ruby.json --unix-socket /var/run/control.unit.sock http://localhost/

RubyだけでもNG、、、

docker-compose exec unit curl -X PUT -d @/root/json/start.php.json --unix-socket /var/run/control.unit.sock http://localhost/

docker-compose exec unit /bin/bash

PHPだけもNG、、、いちからセットアップするしかないか。

# Puma

AlpineにいちからUnitを入れるのも大変なので、
NginxとPuma（Rails5以降）を連携させる

puma --version

config/puma.rb はpumaサーバの設定ファイル

mkdir run
docker-compose exec nginx /bin/sh

vi /etc/nginx/nginx.conf
ls /etc/nginx/conf.d/*.conf
vi /etc/nginx/conf.d/default.conf

http://localhost:8080/blog/

404でうまく表示されなかっった。。。

tcp://0.0.0.0:3000にリダイレクトするか？

http://localhost:8080/blog1/

・・・・うまくいかないなー、docker経由じゃなくてVPS上で試すか？？

https://www.rubylife.jp/rails/
