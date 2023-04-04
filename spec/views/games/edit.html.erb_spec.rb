require 'rails_helper'

RSpec.describe "games/edit", type: :view do
  let(:game) {
    Game.create!(
      title: "MyString",
      genre: "MyString",
      platform: "MyString",
      media: "MyString",
      publisher: "MyString",
      rating: "MyString",
      vr: false
    )
  }

  before(:each) do
    assign(:game, game)
  end

  it "renders the edit game form" do
    render

    assert_select "form[action=?][method=?]", game_path(game), "post" do

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
