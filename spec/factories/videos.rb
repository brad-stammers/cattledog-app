FactoryBot.define do
  factory :video do
    title { "MyString" }
    genre { "MyString" }
    year { "MyString" }
    rating { "MyString" }
    format { "MyString" }
    location { "MyString" }
  end
  factory :video_invalid, class: Video do
    title { "" }
    genre { "" }
    year { "" }
    rating { "" }
    format { "" }
    location { "" }
  end
end
