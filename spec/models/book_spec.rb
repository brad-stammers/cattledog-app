require 'rails_helper'

RSpec.describe Book, type: :model do

      subject { build(:book) }

      describe 'validations' do
        it { should validate_presence_of(:title) }
        it { should validate_presence_of(:format) }
        it { should validate_presence_of(:author) }
      end

end
