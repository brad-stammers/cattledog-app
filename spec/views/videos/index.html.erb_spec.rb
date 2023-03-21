require 'rails_helper'

RSpec.describe "videos/index", type: :view do
  before(:each) do
    assign(:videos, [
      Video.create!(
        title: "Title",
        video_type: "Video Type",
        genre: "Genre",
        year: "Year",
        season: "Season",
        rating: "Rating",
        format: "Format",
        location: "Location",
        digital_copy: false,
        digital_copy_location: "Digital Copy Location"
      ),
      Video.create!(
        title: "Title",
        video_type: "Video Type",
        genre: "Genre",
        year: "Year",
        season: "Season",
        rating: "Rating",
        format: "Format",
        location: "Location",
        digital_copy: false,
        digital_copy_location: "Digital Copy Location"
      )
    ])
  end

  it "renders a list of videos" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Title".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Video Type".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Genre".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Year".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Season".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Rating".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Format".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Location".to_s), count: 2
    assert_select cell_selector, text: Regexp.new(false.to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Digital Copy Location".to_s), count: 2
  end
end
