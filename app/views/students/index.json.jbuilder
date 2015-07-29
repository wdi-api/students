json.array!(@students) do |student|
  json.extract! student, :id, :avatar, :email, :github_user_id, :github_username, :squad, :name
  json.url student_url(student, format: :json)
end
