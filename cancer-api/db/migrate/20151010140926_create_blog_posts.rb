class CreateBlogPosts < ActiveRecord::Migration
  def change
    create_table :blog_posts do |t|
      t.integer :user_id
      t.string :subject
      t.text :body
      t.timestamps null: false
    end

    BlogPost.create!(
      user_id: User.first.id,
      subject: "My first blog post",
      body: "Hack cancer is so inspiring!"
    )
  end
end
