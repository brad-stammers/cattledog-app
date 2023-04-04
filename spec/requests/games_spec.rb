require 'rails_helper'

RSpec.describe "/games", type: :request do

  let(:valid_attributes) {
    FactoryBot.attributes_for(:game)
  }

  let(:invalid_attributes) {
    FactoryBot.attributes_for(:game_invalid)
  }
  let(:valid_headers) {
      {}
  }

  describe "GET /index" do
    it "renders a successful response" do
      game = FactoryBot.create :game
      get api_v1_games_url, headers: valid_headers, as: :json
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      game = FactoryBot.create :game
      get api_v1_game_url(game), as: :json
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new Game" do
        expect {
          post api_v1_games_url, params: { game: valid_attributes }, as: :json
        }.to change(Game, :count).by(1)
      end

      it "renders a JSON response with the new game" do
        post api_v1_games_url,
             params: { game: valid_attributes }, headers: valid_headers, as: :json
        expect(response).to have_http_status(:created)
        expect(response.content_type).to match(a_string_including("application/json"))
      end
    end

    context "with invalid parameters" do
      it "does not create a new Game" do
        expect {
          post api_v1_games_url, params: { game: invalid_attributes }
        }.to change(Game, :count).by(0)
      end

      it "renders an unsuccessful response" do
        post api_v1_games_url, params: { game: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end

    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      let(:new_attributes) {
        { genre: ["RPG"], platform: "PS4" }
      }

      it "updates the requested game" do
        game = FactoryBot.create :game
        patch api_v1_game_url(game), params: { game: new_attributes }, as: :json
        game.reload
        expect(game.genre).to eq(['RPG'])
        expect(game.platform).to eq('PS4')
      end
    end

    context "with invalid parameters" do
      it "renders an unsuccessful response" do
        game = FactoryBot.create :game
        patch api_v1_game_url(game), params: { game: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested game" do
      game = FactoryBot.create :game
      expect {
        delete api_v1_game_url(game)
      }.to change(Game, :count).by(-1)
    end
  end

end
