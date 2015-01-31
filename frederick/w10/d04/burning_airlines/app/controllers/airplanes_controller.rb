class AirplanesController < ApplicationController
  def index
    @airplanes = Airplanes.all
  end
end
