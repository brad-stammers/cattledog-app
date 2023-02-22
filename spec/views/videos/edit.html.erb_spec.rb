require 'rails_helper'

RSpec.describe "videos/edit", type: :view do
  let(:video) {
    Video.create!(
      title: "MyString",
      genre: "MyString",
      year: "MyString",
      rating: "MyString",
      format: "MyString",
      location: "MyString"
    )
  }

  before(:each) do
    assign(:video, video)
  end

  it "renders the edit video form" do
    render

    assert_select "form[action=?][method=?]", video_path(video), "post" do

      assert_select "input[name=?]", "video[title]"

      assert_select "input[name=?]", "video[genre]"

      assert_select "input[name=?]", "video[year]"

      assert_select "input[name=?]", "video[rating]"

      assert_select "input[name=?]", "video[format]"

      assert_select "input[name=?]", "video[location]"
    end
  end
end
