FactoryBot.define do
  factory :video do
    title { "MyString" }
    video_type { "MyString" }
    location { "MyString" }
    genre { ["MyString"] }
    season { "MyString" }
    year { "MyString" }
    rating { "MyString" }
    format { ["MyString"] }
    digital_copy { false }
    digital_copy_location { ["MyString"] }
  end
  factory :video_invalid, class: Video do
    title { "" }
    video_type { "" }
    location { "" }
    genre { "" }
    season { "" }
    year { "" }
    rating { "" }
    format { "" }
    digital_copy { false }
    digital_copy_location { "" }
  end
end
