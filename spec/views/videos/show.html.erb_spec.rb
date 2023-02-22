require 'rails_helper'

RSpec.describe "videos/show", type: :view do
  before(:each) do
    assign(:video, Video.create!(
      title: "Title",
      genre: "Genre",
      year: "Year",
      rating: "Rating",
      format: "Format",
      location: "Location"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Title/)
    expect(rendered).to match(/Genre/)
    expect(rendered).to match(/Year/)
    expect(rendered).to match(/Rating/)
    expect(rendered).to match(/Format/)
    expect(rendered).to match(/Location/)
  end
end
