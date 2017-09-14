class Api::V1::BaseController
  respond_to :json
  protect_from_forgery with: :exception
end
