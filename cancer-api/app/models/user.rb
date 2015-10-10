class User < ActiveRecord::Base

  has_many :blog_posts

  # Make an avatar
  has_one :avatar, class_name: "Attachment", as: :target

end
