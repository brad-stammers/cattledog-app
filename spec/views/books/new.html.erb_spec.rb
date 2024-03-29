require 'rails_helper'

RSpec.describe "books/new", type: :view do
  before(:each) do
    assign(:book, Book.new(
      title: "MyString",
      genre: "MyString",
      author: "MyString",
      format: "MyString",
      location: "MyString",
      isbn: "MyString"
    ))
  end

  it "renders new book form" do
    render

    assert_select "form[action=?][method=?]", books_path, "post" do

      assert_select "input[name=?]", "book[title]"

      assert_select "input[name=?]", "book[genre]"

      assert_select "input[name=?]", "book[author]"

      assert_select "input[name=?]", "book[format]"

      assert_select "input[name=?]", "book[location]"

      assert_select "input[name=?]", "book[isbn]"
    end
  end
end
