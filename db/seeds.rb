Student.destroy_all

studs = JSON.parse(HTTParty.get("http://api.wdidc.org/students").body)
studs.each do |s|
  Student.create(s)
end
