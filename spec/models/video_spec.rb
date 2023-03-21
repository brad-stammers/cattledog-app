require 'rails_helper'

RSpec.describe Video, type: :model do

    subject { build(:video) }

    describe 'validations' do
      it { should validate_presence_of(:title) }
      it { should validate_presence_of(:format) }
      it { should validate_presence_of(:video_type) }
      it { should validate_presence_of(:genre) }
    end

end
