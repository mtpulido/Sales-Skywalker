class ToDosController < ApplicationController
  before_action :authorize_request, only: [ :create, :index, :destroy ]
  before_action :set_to_do, only: [:show, :update, :destroy]

  # GET /to_dos
  def index
    @to_dos = @current_user.to_dos.all
    render json: @to_dos, include: {business: { only: [:name, :email, :phone_number] }}
  end

  # POST /to_dos
  def create
    @to_do = ToDo.new(to_do_params)
    @to_do.user = @current_user
    if @to_do.save
      render json: @to_do, status: :created, location: @to_do
    else
      render json: @to_do.errors, status: :unprocessable_entity
    end
  end

  # DELETE /to_dos/1
  def destroy
    @to_do.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_to_do
      @to_do = ToDo.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def to_do_params
      params.require(:to_do).permit(:user_id, :business_id)
    end
end
