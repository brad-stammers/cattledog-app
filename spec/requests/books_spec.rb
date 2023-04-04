require 'rails_helper'

RSpec.describe "/books", type: :request do

  let(:valid_attributes) {
    FactoryBot.attributes_for(:book)
  }

  let(:invalid_attributes) {
    FactoryBot.attributes_for(:book_invalid)
  }
  let(:valid_headers) {
      {}
  }

  describe "GET /index" do
    it "renders a successful response" do
      book = FactoryBot.create :book
      get api_v1_books_url, headers: valid_headers, as: :json
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      book = FactoryBot.create :book
      get api_v1_book_url(book), as: :json
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new Book" do
        expect {
          post api_v1_books_url, params: { book: valid_attributes }, as: :json
        }.to change(Book, :count).by(1)
      end

      it "renders a JSON response with the new book" do
        post api_v1_books_url,
             params: { book: valid_attributes }, headers: valid_headers, as: :json
        expect(response).to have_http_status(:created)
        expect(response.content_type).to match(a_string_including("application/json"))
      end
    end

    context "with invalid parameters" do
      it "does not create a new Book" do
        expect {
          post api_v1_books_url, params: { book: invalid_attributes }
        }.to change(Book, :count).by(0)
      end

      it "renders an unsuccessful response" do
        post api_v1_books_url, params: { book: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end

    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      let(:new_attributes) {
        { genre: "Comedy" }
      }

      it "updates the requested book" do
        book = FactoryBot.create :book
        patch api_v1_book_url(book), params: { book: new_attributes }, as: :json
        book.reload
        expect(book.genre).to eq('Comedy')
      end
    end

    context "with invalid parameters" do
      it "renders an unsuccessful response" do
        book = FactoryBot.create :book
        patch api_v1_book_url(book), params: { book: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested book" do
      book = FactoryBot.create :book
      expect {
        delete api_v1_book_url(book)
      }.to change(Book, :count).by(-1)
    end
  end

end
