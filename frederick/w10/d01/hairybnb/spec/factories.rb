FactoryGirl.define do  factory :tenant do
    
  end


  factory :apartment do
    sequence(:title) { |n| "Spacious #{n} Bed Apartment with a Grand View" }
    sequence(:bedrooms) { |n| n }
    price_in_cents 1_500_000
    location "Bondi, NSW"
    description "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat labore in laudantium, quidem totam id nemo, asperiores ad, saepe inventore minus distinctio voluptatum, quas similique? Veritatis ipsa blanditiis laudantium?"
    available true
  end
end