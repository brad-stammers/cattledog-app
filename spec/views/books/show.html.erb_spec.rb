require 'rails_helper'

RSpec.describe "books/show", type: :view do
  before(:each) do
    assign(:book, Book.create!(
      title: "Title",
      genre: "Genre",
      author: "Author",
      format: "Format",
      location: "Location",
      isbn: "Isbn"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Title/)
    expect(rendered).to match(/Genre/)
    expect(rendered).to match(/Author/)
    expect(rendered).to match(/Format/)
    expect(rendered).to match(/Location/)
    expect(rendered).to match(/Isbn/)
  end
end
