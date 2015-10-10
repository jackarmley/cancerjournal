class UserResource < JSONAPI::Resource

  attributes :first_name, :last_name, :nickname, :email, :age

  has_many :blog_posts

end
