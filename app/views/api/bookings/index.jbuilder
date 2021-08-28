json.bookings do 
    json.array! @bookings do |booking|
        json.id booking.id
        json.start_date booking.start_date
        json.end_date booking.end_date
        json.paid booking.paid
        json.title booking.property.title
        json.image_url booking.property.image_url
        json.charges booking.charges
    end
end
