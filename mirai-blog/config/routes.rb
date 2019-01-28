Rails.application.routes.draw do
  get 'welcome/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # ADD articlesに対するRESTfulなCRUDルートが作成される
  resources :articles do
    resources :comments # ADD articlesの下位にcommentsルートを追加する
  end

  # ADD routeアクセスでwalcomeコントローラのindexが呼ばれる
  root 'welcome#index'

  # ADD ユーザ登録
  resources :users

  # ADD ログイン / ログアウト
  get     'login',   to: 'sessions#new'
  post    'login',   to: 'sessions#create'
  delete  'logout',  to: 'sessions#destroy'
end
