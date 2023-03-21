require 'rails_helper'

RSpec.describe "videos/show", type: :view do
  before(:each) do
    assign(:video, Video.create!(
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
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Title/)
    expect(rendered).to match(/Video Type/)
    expect(rendered).to match(/Genre/)
    expect(rendered).to match(/Year/)
    expect(rendered).to match(/Season/)
    expect(rendered).to match(/Rating/)
    expect(rendered).to match(/Format/)
    expect(rendered).to match(/Location/)
    expect(rendered).to match(/false/)
    expect(rendered).to match(/Digital Copy Location/)
  end
end
