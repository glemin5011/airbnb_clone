json.property do
  json.id @property.id
  json.title @property.title
  json.city @property.city
  json.country @property.country
  json.type @property.type
  json.price_per_night @property.price_per_night
  json.max_guests @property.max_guests
  json.bedrooms @property.bedrooms
  json.beds @property.beds
  json.baths @property.baths
  json.image_url @property.image_url

  json.user do
    json.id @property.user.id
    json.username @property.user.username
  end
end
