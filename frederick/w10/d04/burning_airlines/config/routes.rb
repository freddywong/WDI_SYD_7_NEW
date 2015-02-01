# == Route Map
#
#        Prefix Verb   URI Pattern                   Controller#Action
#          root GET    /                             pages#home
#     airplanes GET    /airplanes(.:format)          airplanes#index
#               POST   /airplanes(.:format)          airplanes#create
#  new_airplane GET    /airplanes/new(.:format)      airplanes#new
# edit_airplane GET    /airplanes/:id/edit(.:format) airplanes#edit
#      airplane GET    /airplanes/:id(.:format)      airplanes#show
#               PATCH  /airplanes/:id(.:format)      airplanes#update
#               PUT    /airplanes/:id(.:format)      airplanes#update
#               DELETE /airplanes/:id(.:format)      airplanes#destroy
#

Rails.application.routes.draw do
  resources :airplanes
  root 'pages#home'


  
end
