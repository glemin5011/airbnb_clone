json.booking do
    json.id @booking.id
    json.start_date @booking.start_date
    json.end_date @booking.end_date

    json.property do 
        json.id @booking.property.id
        json.title @booking.property.title
        json.city @booking.property.city
        json.country @booking.property.country
        json.property_type @booking.property.property_type
        json.price_per_night @booking.property.price_per_night
        json.image_url @booking.property.image_url
        json.user_id @booking.property.user_id
    end

    json.charges @booking.charges
end