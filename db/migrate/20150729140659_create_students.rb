class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :avatar
      t.string :email
      t.integer :github_user_id
      t.string :github_username
      t.string :squad
      t.string :name

      t.timestamps null: false
    end
  end
end
