@events.each do |event|
  json.set! event.id do
    json.partial! 'event', event: event
    json.reviewIds []
  end
end
