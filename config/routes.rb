Rails.application.routes.draw do
  root to: 'static_pages#home'

  get '/property/:id' => 'static_pages#property'
  get '/login' => 'static_pages#login'
  get '/booking/:id/success' => 'static_pages#success'
  get '/trips' => 'static_pages#trips'
  get '/host' => 'static_pages#host'

  namespace :api do
    # Add routes below this line
    resources :users, only: [:create]
    resources :sessions, only: [:create, :destroy]
    resources :properties, only: [:index, :show]
    resources :bookings, only: [:create, :show, :index, :byuser]
    resources :charges, only: [:create]

    get '/authenticated' => 'sessions#authenticated'
    get '/properties/:id/bookings' => 'bookings#get_property_bookings'
    get '/myproperties' => 'bookings#byuser'
   


    post '/charges/mark_complete' => 'charges#mark_complete'

  end

end
