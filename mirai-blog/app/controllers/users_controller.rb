class UsersController < AuthController

  # ログインしてなくても、ログイン画面に遷移させない（new、createメソッドのみ）
  skip_before_action :require_sign_in!, only: [:new, :create]
  
  def new
    @user = User.new
  end
  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to login_path
    else
      render 'new'
    end
  end
  private
    def user_params
      params.require(:user).permit(:name, :mail, :password, :password_confirmation)
    end
end