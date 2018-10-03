require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end
# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console
c1 = Customer.new("Steve", "Cou")
c2 = Customer.new("John", "Arn")
c3 = Customer.new("Olly", "Sou")

r1 = Restaurant.new("Nandos")
r2 = Restaurant.new("McD")
r3 = Restaurant.new("KFC")

rev1 = Review.new(c1, r3,"This is great pie an mash", 4)
rev2 = Review.new(c2, r2,"Terrible food", 2)
rev3 = Review.new(c1, r1, "half decent", 3)
rev4 = Review.new(c2, r1, "half decent", 3)
rev5 = Review.new(c2, r1, "half decent", 2)
rev6 = Review.new(c2, r1, "half decent", 7)
rev7 = Review.new(c2, r1, "half decent", 3)
rev8 = Review.new(c2, r1, "half decent", 3)
rev9 = Review.new(c2, r1, "half decent", 8)
rev10 = Review.new(c2, r1, "half decent", 10)

#   def initialize(customer, restaurant, rating, content)

binding.pry
0 #leave this here to ensure binding.pry isn't the last line
