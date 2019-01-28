class AuthController < ApplicationController

	before_action :current_user
  before_action :require_sign_in!
  helper_method :signed_in?

  protect_from_forgery with: :exception

	# remember_tokenからユーザ情報を取得
  def current_user
    remember_token = User.encrypt(cookies[:user_remember_token])
    @current_user ||= User.find_by(remember_token: remember_token)
	end
	# ログイン
	def sign_in(user)
    remember_token = User.new_remember_token
    cookies.permanent[:user_remember_token] = remember_token
    user.update!(remember_token: User.encrypt(remember_token))
    @current_user = user
	end
	# ログアウト
	def sign_out
    cookies.delete(:user_remember_token)
	end
	# ログイン済みかどうかを判定して返す
	def signed_in?
    @current_user.present?
  end
  # ログイン済みでは無いときはログイン画面にリダイレクトする
  private
    def require_sign_in!
      redirect_to login_path unless signed_in?
    end
end