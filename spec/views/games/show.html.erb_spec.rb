require 'rails_helper'

RSpec.describe "games/show", type: :view do
  before(:each) do
    assign(:game, Game.create!(
      title: "Title",
      genre: "Genre",
      platform: "Platform",
      media: "Media",
      publisher: "Publisher",
      rating: "Rating",
      vr: false
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Title/)
    expect(rendered).to match(/Genre/)
    expect(rendered).to match(/Platform/)
    expect(rendered).to match(/Media/)
    expect(rendered).to match(/Publisher/)
    expect(rendered).to match(/Rating/)
    expect(rendered).to match(/false/)
  end
end
