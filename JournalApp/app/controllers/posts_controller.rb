class PostsController < ApplicationController
  def create
    @post = Post.new(post_params)

    if @post.save
      render :show
    else
      flash.now = @post.errors.full_messages
      render "static_pages/root"
    end
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def post_params
    params.require(:post).permit(:title, :body)
  end
end
