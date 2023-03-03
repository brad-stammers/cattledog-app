require 'rails_helper'

RSpec.describe "/videos", type: :request do

  let(:valid_attributes) {
    FactoryBot.attributes_for(:video)
  }

  let(:invalid_attributes) {
    FactoryBot.attributes_for(:video_invalid)
  }

  describe "GET /index" do
    it "renders a successful response" do
      video = FactoryBot.create :video
      get videos_url
      json = JSON.parse(response.body)
      
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      video = FactoryBot.create :video
      get video_url(video)
      json = JSON.parse(response.body)
      expect(json['title']).to eq(video.title)
      expect(response).to be_successful
    end
  end

  describe "GET /new" do
    it "renders a successful response" do
      get new_video_url
      expect(response).to be_successful
    end
  end

  describe "GET /edit" do
    it "renders a successful response" do
      video = FactoryBot.create :video
      get edit_video_url(video)
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new Video" do
        expect {
          post videos_url, params: { video: valid_attributes }
        }.to change(Video, :count).by(1)
      end

    end

    context "with invalid parameters" do
      it "does not create a new Video" do
        expect {
          post videos_url, params: { video: invalid_attributes }
        }.to change(Video, :count).by(0)
      end

      it "renders a successful response (i.e. to display the 'new' template)" do
        post videos_url, params: { video: invalid_attributes }
        expect(response).to be_successful
      end

    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      let(:new_attributes) {
        { genre: "Comedy", rating: "M" }
      }

      it "updates the requested video" do
        video = FactoryBot.create :video
        patch video_url(video), params: { video: new_attributes }
        video.reload
        expect(video.genre).to eq('Comedy')
        expect(video.rating).to eq('M')
      end

    end

    context "with invalid parameters" do

      it "renders a successful response (i.e. to display the 'edit' template)" do
        video = FactoryBot.create :video
        patch video_url(video), params: { video: invalid_attributes }
        expect(response).to be_successful
      end

    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested video" do
      video = FactoryBot.create :video
      expect {
        delete video_url(video)
      }.to change(Video, :count).by(-1)
    end

  end
end
