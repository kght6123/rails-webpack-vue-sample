class ArticlesController < ApplicationController
	# show メソッドを追記
	def show
		@article = Article.find(params[:id]) # @article変数はerbで使う
	end
	# index メソッドを追記
	def index
		@articles = Article.all
	end
	# new メソッドを追記
	def new
		@article = Article.new
	end
	# editメソッドを追記
	def edit
		@article = Article.find(params[:id])
	end
	# create メソッドを追記
	#def create
	#	render plain: params[:article].inspect
	#end
	# create メソッドを作成（Articleを作成＆保存してリダイレクト）
	#def create
	#	@article = Article.new(params[:article])
	#	@article.save
	#	redirect_to @article
	#end
	# create メソッドを作成（Articleを作成＆保存してリダイレクト）
	def create
		@article = Article.new(article_params)
		#@article.save
		#redirect_to @article
		if @article.save
			redirect_to @article
		else
			render 'new'
		end
	end
	def update
		@article = Article.find(params[:id])
		if @article.update(article_params)
			redirect_to @article
		else
			render 'edit'
		end
	end
	def destroy
		@article = Article.find(params[:id])
		@article.destroy
		redirect_to articles_path
	end
	private
		def article_params
			params.require(:article).permit(:title, :text)
		end
end
