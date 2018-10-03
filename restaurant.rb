class Restaurant
  attr_accessor :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  def self.find_by_name(name)
    Restaurant.all.select do |restaurant|
      restaurant.name == name
    end
  end

  def reviews
    Review.all.select do |review|
      review.restaurant == self
    end
  end

  def customers
    reviews.map do |review|
      review.customer
    end.uniq
  end

  def average_star_rating
    total = 0
    no_reviews = 0
    reviews.each do |review|
      total += review.rating
      no_reviews += 1
    end
    average = (total/no_reviews)
  end

  def longest_review
    longest_word = ""
    Review.all.each do |review|
      if review.content.size > longest_word.size
        longest_word = review.content
      end
    end
      longest_word
  end




end
