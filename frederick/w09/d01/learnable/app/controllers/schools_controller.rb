class SchoolsController < ApplicationController
  def index
    @schools = School.all

    respond_to do |f|
      f.json { render json: @schools}
    end
  end

  def create
    @school = School.create(school_params)

  end

  def update
    @school = School.find(params[:id])
    @school.update(school_params)

  end

  private

  def school_params
    params.require(:school).permit(:name, :description)
  end 
end
