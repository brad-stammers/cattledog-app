require 'rails_helper'

RSpec.describe "/videos", type: :request do

  let(:valid_attributes) {
    FactoryBot.attributes_for(:video)
  }

  let(:invalid_attributes) {
    FactoryBot.attributes_for(:video_invalid)
  }
  let(:valid_headers) {
      {}
  }

  describe "GET /index" do
    it "renders a successful response" do
      video = FactoryBot.create :video
      get api_v1_videos_url, headers: valid_headers, as: :json
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      video = FactoryBot.create :video
      get api_v1_video_url(video), as: :json
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new Video" do
        expect {
          post api_v1_videos_url, params: { video: valid_attributes }, as: :json
        }.to change(Video, :count).by(1)
      end

      it "renders a JSON response with the new video" do
        post api_v1_videos_url,
             params: { video: valid_attributes }, headers: valid_headers, as: :json
        expect(response).to have_http_status(:created)
        expect(response.content_type).to match(a_string_including("application/json"))
      end
    end

    context "with invalid parameters" do
      it "does not create a new Video" do
        expect {
          post api_v1_videos_url, params: { video: invalid_attributes }
        }.to change(Video, :count).by(0)
      end

      it "renders an unsuccessful response" do
        post api_v1_videos_url, params: { video: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end

    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      let(:new_attributes) {
        { genre: ["Comedy"], rating: "M" }
      }

      it "updates the requested video" do
        video = FactoryBot.create :video
        patch api_v1_video_url(video), params: { video: new_attributes }, as: :json
        video.reload
        expect(video.genre).to eq(['Comedy'])
        expect(video.rating).to eq('M')
      end
    end

    context "with invalid parameters" do
      it "renders an unsuccessful response" do
        video = FactoryBot.create :video
        patch api_v1_video_url(video), params: { video: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested video" do
      video = FactoryBot.create :video
      expect {
        delete api_v1_video_url(video)
      }.to change(Video, :count).by(-1)
    end
  end

end
