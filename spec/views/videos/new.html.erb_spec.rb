require 'rails_helper'

RSpec.describe "videos/new", type: :view do
  before(:each) do
    assign(:video, Video.new(
      title: "MyString",
      video_type: "MyString",
      genre: "MyString",
      year: "MyString",
      season: "MyString",
      rating: "MyString",
      format: "MyString",
      location: "MyString",
      digital_copy: false,
      digital_copy_location: "MyString"
    ))
  end

  it "renders new video form" do
    render

    assert_select "form[action=?][method=?]", videos_path, "post" do

      assert_select "input[name=?]", "video[title]"

      assert_select "input[name=?]", "video[video_type]"

      assert_select "input[name=?]", "video[genre]"

      assert_select "input[name=?]", "video[year]"

      assert_select "input[name=?]", "video[season]"

      assert_select "input[name=?]", "video[rating]"

      assert_select "input[name=?]", "video[format]"

      assert_select "input[name=?]", "video[location]"

      assert_select "input[name=?]", "video[digital_copy]"

      assert_select "input[name=?]", "video[digital_copy_location]"
    end
  end
end
