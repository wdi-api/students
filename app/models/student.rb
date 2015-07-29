class Student < ActiveRecord::Base
  def to_param
    github_user_id.to_s
  end
end
