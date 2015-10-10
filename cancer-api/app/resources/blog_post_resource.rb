class BlogPostResource < JSONAPI::Resource

  attributes :body, :created_at, :updated_at

  has_one :user
end
