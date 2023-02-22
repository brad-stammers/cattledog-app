require 'rails_helper'

RSpec.describe "videos/new", type: :view do
  before(:each) do
    assign(:video, Video.new(
      title: "MyString",
      genre: "MyString",
      year: "MyString",
      rating: "MyString",
      format: "MyString",
      location: "MyString"
    ))
  end

  it "renders new video form" do
    render

    assert_select "form[action=?][method=?]", videos_path, "post" do

      assert_select "input[name=?]", "video[title]"

      assert_select "input[name=?]", "video[genre]"

      assert_select "input[name=?]", "video[year]"

      assert_select "input[name=?]", "video[rating]"

      assert_select "input[name=?]", "video[format]"

      assert_select "input[name=?]", "video[location]"
    end
  end
end
