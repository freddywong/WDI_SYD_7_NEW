class AirplanesController < ApplicationController
  def index
    render json: Airplane.all
  end

  def create
    @airplane = Airplane.create(airplane_params)
    render json: @airplane
  end

  def update
    @airplane = Airplane.find(params[:id])
    @airplane.update(airplane_params)
    render json: @airplane
  end

  def destroy
    @airplane = Airplane.find(params[:id])
    @airplane.destroy
    render json: { status: "ok" }
  end

  private
  def airplane_params
    params.require(:airplane).permit(:name, :rows, :columns)
  end

end
