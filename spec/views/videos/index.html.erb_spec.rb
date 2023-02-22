require 'rails_helper'

RSpec.describe "videos/index", type: :view do
  before(:each) do
    assign(:videos, [
      Video.create!(
        title: "Title",
        genre: "Genre",
        year: "Year",
        rating: "Rating",
        format: "Format",
        location: "Location"
      ),
      Video.create!(
        title: "Title",
        genre: "Genre",
        year: "Year",
        rating: "Rating",
        format: "Format",
        location: "Location"
      )
    ])
  end

  it "renders a list of videos" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Title".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Genre".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Year".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Rating".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Format".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Location".to_s), count: 2
  end
end
