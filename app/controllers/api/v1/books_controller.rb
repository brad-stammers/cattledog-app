class Api::V1::BooksController < ApplicationController
  before_action :set_book, only: %i[ show edit update destroy ]

  # GET /books or /books.json
  def index
      @books = Book.all
      render json: @books
  end

  # GET /books/1 or /books/1.json
  def show
    @book = Book.find_by(id: params[:id])
    render json: @book
  end

  # GET /books/new
  def new
    @book = Book.new
    render json: @book
  end

  # GET /books/1/edit
  def edit
    render json: @book
  end

  # POST /books or /books.json
  def create
    @book = Book.new(book_params)

    if @book.save
      render json: @book, status: :created
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /books/1 or /books/1.json
  def update
    if @book.update(book_params)
      render json: @book, status: :ok
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # DELETE /books/1 or /books/1.json
  def destroy
    @book.destroy

    respond_to do |format|
      format.html { redirect_to books_url, notice: "Book was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def book_params
      params.require(:book).permit(:title, :genre, :author, :series, :book_no, :location, :isbn, :format => [])
    end
end
