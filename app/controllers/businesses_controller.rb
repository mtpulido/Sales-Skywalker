class BusinessesController < ApplicationController
  before_action :authorize_request, only: [ :create, :update, :destroy ]
  before_action :set_business, only: [ :update, :destroy ]

  # GET /businesses
  def index
    @businesses = Business.all

    render json: @businesses
  end

  # GET /businesses/1
  def show
    @business = Business.find(params[:id])
    render json: @business
  end

  # POST /businesses
  def create
    @business = Business.new(business_params)
    @business.user = @current_user
    if @business.save
      render json: @business, status: :created, location: @business
    else
      render json: @business.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /businesses/1
  def update
    if @business.update(business_params)
      render json: @business
    else
      render json: @business.errors, status: :unprocessable_entity
    end
  end

  # DELETE /businesses/1
  def destroy
    @business.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_business
      @business = @current_user.businesses.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def business_params
      params.require(:business).permit(:user_id, :name, :contact, :phone_number, :email, :address, :industry, :client_status, :notes)
    end
end
