module Api
    class PropertiesController < ApplicationController
        def index
            @properties = Property.order(created_at: :desc).page(params[:page]).per(6)
            return render json: { error: 'not_found'}, status: :not_found if !@properties

            render 'api/properties/index', status: :ok
        end

        def show 
            @property = Property.find_by(id: params[:id])
            return render json: { error: 'not_found' }, status: :not_found if !@property

            render 'api/properties/show', status: :ok
        end

        def myproperties
            token = cookies.signed[:airbnb_session_token]
            session = Session.find_by(token: token)
            return render json: { error: 'user is not logged in'}, status: :unauthorized if !session

            @properties = Property.where(user_id: session.user.id)
            return render json: {error: 'no properties found'}, status: :not_found if !@properties

            render 'api/properties/myproperties'
        end

        def add

        end

    end
end