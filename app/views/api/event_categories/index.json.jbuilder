@event_categories.each do |event_category|
  json.set! event_category.id do
    json.partial! 'event_category', event_category: event_category
  end
end