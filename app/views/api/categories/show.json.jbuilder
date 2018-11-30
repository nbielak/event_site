if @events
    @events.each do |event|
        json.set! event.id do
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


            json.start_date_obj do
            json.year event.start_date.year
            json.month event.start_date.month
            json.date event.start_date.day
            json.cwday event.start_date.cwday
            end

            json.photoUrl url_for(event.photo) if event.photo.attached?
        end
    end

else
    json.partial! "api/categories/category", category: @category
end