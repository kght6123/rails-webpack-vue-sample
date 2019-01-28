class SessionsController < AuthController
	
	# ログインしてなくても、ログイン画面に遷移させない（new、createメソッドのみ）
	skip_before_action :require_sign_in!, only: [:new, :create]

	# メールアドレスからユーザの情報を取得（createメソッドの時のみ）
	before_action :set_user, only: [:create]
	
	# ログイン画面を表示
	def new
	end
	
	def create
		# パスワードの検証
    if @user.authenticate(session_params[:password])
			# ログイン（remember_tokenを作成）
			sign_in(@user)
      redirect_to root_path
		else
			# ログインエラー（パスワードが不正）
      flash.now[:danger] = t('.flash.invalid_password')
      render 'new'
    end
  end
	def destroy
		# ログアウト
    sign_out
    redirect_to login_path
	end
	
	private
		# メールアドレスからユーザの情報を取得
    def set_user
      @user = User.find_by!(mail: session_params[:mail])
		rescue
			# ログインエラー（メールアドレスが不正）
      flash.now[:danger] = t('.flash.invalid_mail')
      render action: 'new'
    end
    # 許可するパラメータ
    def session_params
      params.require(:session).permit(:mail, :password)
    end
end