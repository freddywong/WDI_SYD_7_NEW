# == Route Map
#
#          Prefix Verb   URI Pattern                     Controller#Action
#            root GET    /                               pages#index
#           books GET    /books(.:format)                books#index
#                 POST   /books(.:format)                books#create
#        new_book GET    /books/new(.:format)            books#new
#       edit_book GET    /books/:id/edit(.:format)       books#edit
#            book GET    /books/:id(.:format)            books#show
#                 PATCH  /books/:id(.:format)            books#update
#                 PUT    /books/:id(.:format)            books#update
#                 DELETE /books/:id(.:format)            books#destroy
#         recipes GET    /recipes(.:format)              recipes#index
#                 POST   /recipes(.:format)              recipes#create
#      new_recipe GET    /recipes/new(.:format)          recipes#new
#     edit_recipe GET    /recipes/:id/edit(.:format)     recipes#edit
#          recipe GET    /recipes/:id(.:format)          recipes#show
#                 PATCH  /recipes/:id(.:format)          recipes#update
#                 PUT    /recipes/:id(.:format)          recipes#update
#                 DELETE /recipes/:id(.:format)          recipes#destroy
#     ingredients GET    /ingredients(.:format)          ingredients#index
#                 POST   /ingredients(.:format)          ingredients#create
#  new_ingredient GET    /ingredients/new(.:format)      ingredients#new
# edit_ingredient GET    /ingredients/:id/edit(.:format) ingredients#edit
#      ingredient GET    /ingredients/:id(.:format)      ingredients#show
#                 PATCH  /ingredients/:id(.:format)      ingredients#update
#                 PUT    /ingredients/:id(.:format)      ingredients#update
#                 DELETE /ingredients/:id(.:format)      ingredients#destroy
#

Rails.application.routes.draw do


  root to: 'pages#index'
  resources :books
  resources :recipes
  resources :ingredients

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
