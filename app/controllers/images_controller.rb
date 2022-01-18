class ImagesController < ApplicationController

  def create
    image = Image.create(image_params)
    render json: { image: image }
  end

  def show
    image = Image.find(params[:id])
    render json: {image: image, image_url: featured_image(image)}
  end

  private

  def image_params
    params.permit(:caption, :picture)
  end

  def featured_image(image)
    if image.picture.attached?
      {
        url: rails_blob_url(image.picture)
      }
    end
  end

end
