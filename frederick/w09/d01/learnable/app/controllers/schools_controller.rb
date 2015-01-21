class SchoolsController < ApplicationController
  def index
    @schools = School.all

    respond_to do |f|
      f.json { render json: @schools}
    end
  end

  def create
    @school = School.create(school_params)

    respond_to do |f|
      f.json { render json: @schools}
    end
  end

  def update
    @school = School.find(params[:id])
    @school.update(school_params)

    respond_to do |f|
      f.json { render json: @school}
    end
  end

  def destroy
    @school = School.find(params[:id])
    @school.destroy

    respond_to do |f|
      f.json { render json: {status: "ok"} }
    end
  end
  private

  def school_params
    params.require(:school).permit(:name, :description)
  end 
end
