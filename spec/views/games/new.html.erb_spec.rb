require 'rails_helper'

RSpec.describe "games/new", type: :view do
  before(:each) do
    assign(:game, Game.new(
      title: "MyString",
      genre: "MyString",
      platform: "MyString",
      media: "MyString",
      publisher: "MyString",
      rating: "MyString",
      vr: false
    ))
  end

  it "renders new game form" do
    render

    assert_select "form[action=?][method=?]", games_path, "post" do

      assert_select "input[name=?]", "game[title]"

      assert_select "input[name=?]", "game[genre]"

      assert_select "input[name=?]", "game[platform]"

      assert_select "input[name=?]", "game[media]"

      assert_select "input[name=?]", "game[publisher]"

      assert_select "input[name=?]", "game[rating]"

      assert_select "input[name=?]", "game[vr]"
    end
  end
end
