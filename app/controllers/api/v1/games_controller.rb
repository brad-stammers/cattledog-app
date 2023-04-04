class Api::V1::GamesController < ApplicationController
  before_action :set_game, only: %i[ show edit update destroy ]

  # GET /games or /games.json
  def index
      @games = Game.all
      render json: @games
  end

  # GET /games/1 or /games/1.json
  def show
    @game = Game.find_by(id: params[:id])
    render json: @game
end

  # GET /games/new
  def new
    @game = Game.new
    render json: @game
  end

  # GET /games/1/edit
  def edit
    render json: @game
  end

  # POST /games or /games.json
  def create
    @game = Game.new(game_params)

    if @game.save
      render json: @game, status: :created
    else
      render json: @game.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /games/1 or /games/1.json
  def update
    if @game.update(game_params)
      render json: @game, status: :ok
    else
      render json: @game.errors, status: :unprocessable_entity
    end
  end

  # DELETE /games/1 or /games/1.json
  def destroy
    @game.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_game
      @game = Game.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def game_params
      params.require(:game).permit(:title, :platform, :media, :publisher, :rating, :vr, :genre => [])
    end
end
