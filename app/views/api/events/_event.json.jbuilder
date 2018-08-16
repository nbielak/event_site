json.extract! event, :id,
                     :title,
                     :description,
                     :venue_name,
                     :address,
                     :address2,
                     :city,
                     :state,
                     :zip,
                     :country,
                     :start_time,
                     :end_time,
                     :start_date,
                     :end_date,
                     :user_id,
                     :organizer_name,
                     :organizer_description

json.start_time_obj do
  json.hour event.start_time.hour
  json.minute event.start_time.min
end

json.end_time_obj do
  if event.end_time
    json.hour event.end_time.hour
    json.minute event.end_time.min
  else
    json.null!
  end
end

json.start_date_obj do
  json.year event.start_date.year
  json.month event.start_date.month
  json.date event.start_date.day
  json.cwday event.start_date.cwday
end

json.end_date_obj do
  if event.end_date
    json.year event.end_date.year
    json.month event.end_date.month
    json.date event.end_date.date
    json.cwday event.end_date.cwday
  else
    json.null!
  end
end
