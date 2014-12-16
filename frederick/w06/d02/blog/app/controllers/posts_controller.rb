class PostsController < ApplicationController
	def index
		@posts = Post.all
	end

	def show
		@post = Post.find(params[:id])
		@comments = Comment.all
	end

	def new
		@post = Post.new
	end

	def create
		@post = Post.new post_params
		@post.save
		redirect_to posts_path(@post) 
	end
	private

	def post_params
		params.require(:post).permit(:title, :content, :author)
	end


end
