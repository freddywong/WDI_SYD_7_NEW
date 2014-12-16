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
  
end
