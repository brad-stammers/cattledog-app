FactoryBot.define do
  factory :book do
    title { "MyString" }
    genre { "MyString" }
    author { "MyString" }
    series { "MyString" }
    book_no { "MyString" }
    format { ["MyString"] }
    location { "MyString" }
    isbn { "MyString" }
  end
  factory :book_invalid, class: Book do
    title { "" }
    genre { "" }
    author { "" }
    series { "" }
    book_no { "" }
    format { [""] }
    location { "" }
    isbn { "" }
  end
end
