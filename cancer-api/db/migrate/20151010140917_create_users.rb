class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name, :last_name, :email, :nickname
      t.integer :age

      t.timestamps null: false
    end

    # Create a dummy user
    User.create!(
      first_name: "Harry", last_name: "Smith",
      age: 24, nickname: "Superharry",
      email: "harry@hackcancer.co"
    )
  end
end
