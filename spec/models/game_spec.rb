require 'rails_helper'

RSpec.describe Game, type: :model do

      subject { build(:game) }

      describe 'validations' do
        it { should validate_presence_of(:title) }
        it { should validate_presence_of(:genre) }
        it { should validate_presence_of(:platform) }
        it { should validate_presence_of(:media) }
      end

end
