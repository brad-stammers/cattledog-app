class Api::V1::VideosController < ApplicationController
  before_action :set_video, only: %i[ show edit update destroy ]

  # GET /videos or /videos.json
  def index
    @videos = Video.all
    render json: @videos
  end

  # GET /videos/1 or /videos/1.json
  def show
    @video = Video.find_by(id: params[:id])
    render json: @video
end

  # GET /videos/new
  def new
    @video = Video.new
    render json: @video
  end

  # GET /videos/1/edit
  def edit
    render json: @video
  end

  # POST /videos or /videos.json
  def create
    @video = Video.new(video_params)

    if @video.save
      render json: @video, status: :created
    else
      render json: @video.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /videos/1 or /videos/1.json
  def update
    if @video.update(video_params)
      render json: @video, status: :ok
    else
      render json: @video.errors, status: :unprocessable_entity
    end
  end

  # DELETE /videos/1 or /videos/1.json
  def destroy
    @video.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_video
      @video = Video.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def video_params
      params.require(:video).permit(:title, :video_type, :year, :season, :rating, :location, :digital_copy, :digital_copy_location => [], :genre => [], :format => [])
    end
end
