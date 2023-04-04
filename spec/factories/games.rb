FactoryBot.define do
  factory :game do
    title { "MyString" }
    genre { ["MyString"] }
    platform { "MyString" }
    media { "MyString" }
    publisher { "MyString" }
    rating { "MyString" }
    vr { false }
  end
  factory :game_invalid, class: Game do
    title { "" }
    genre { [""] }
    platform { "" }
    media { "" }
    publisher { "" }
    rating { "" }
    vr { false }
  end
end
