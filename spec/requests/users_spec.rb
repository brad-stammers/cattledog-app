require 'rails_helper'

RSpec.describe "Users", type: :request do

  let(:valid_attributes) {
    FactoryBot.attributes_for(:user)
  }

  let(:invalid_attributes) {
    FactoryBot.attributes_for(:user_invalid)
  }
  let(:valid_headers) {
      {}
  }

  describe "GET /index" do
    it "renders a successful response" do
      user = FactoryBot.create :user
      get users_url, headers: valid_headers, as: :json
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      user = FactoryBot.create :user
      get user_url(user), as: :json
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new User" do
        expect {
          post users_url, params: { user: valid_attributes }, as: :json
        }.to change(User, :count).by(1)
      end

      it "renders a JSON response with the new User" do
        post users_url,
             params: { user: valid_attributes }, headers: valid_headers, as: :json
        expect(response).to have_http_status(:success)
        expect(response.content_type).to match(a_string_including("application/json"))
      end
    end

    context "with invalid parameters" do
      it "does not create a new User" do
        expect {
          post users_url, params: { user: invalid_attributes }
        }.to change(User, :count).by(0)
      end

      it "renders an unsuccessful response" do
        post users_url, params: { user: invalid_attributes }
        expect(response).to have_http_status(:error)
      end

    end
  end

  # describe "GET /create" do
  #   it "returns http success" do
  #     get "/users/create"
  #     expect(response).to have_http_status(:success)
  #   end
  # end
  #
  # describe "GET /show" do
  #   it "returns http success" do
  #     get "/users/show"
  #     expect(response).to have_http_status(:success)
  #   end
  # end
  #
  # describe "GET /index" do
  #   it "returns http success" do
  #     get "/users/index"
  #     expect(response).to have_http_status(:success)
  #   end
  # end

end
