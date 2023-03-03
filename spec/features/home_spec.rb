#spec/features/home_spec.rb
require 'rails_helper'

Class Home
    include Capybara::DSL
    def visit_homepage
        visit('/')
    end        
end

feature "Visit homepage" do
    let(:home) {Home.new}
    scenario "Able to see welcome text", :js => true do
        home.visit_homepage
        expect(page).to have_content("Welcome To My Blog")
    end
end
