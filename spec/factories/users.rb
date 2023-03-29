FactoryBot.define do
  factory :user do
    first_name { "MyString" }
    last_name { "MyString" }
    email { "MyString" }
    password { "MyString" }
  end

  factory :user_invalid, class:User do
    first_name { "" }
    last_name { "" }
    email { "" }
    password { "" }
  end


end
