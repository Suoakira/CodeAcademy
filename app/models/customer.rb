class Customer
  attr_accessor :first_name, :last_name

  @@all = []

  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name  = last_name
    @@all << self
  end

  def full_name
    "#{first_name} #{last_name}"
  end

  def self.all
    @@all
  end

  def self.find_by_name(name)
    Customer.all.select do |customer|
      customer.full_name == name
    end
  end
  def self.find_all_by_first_name(name)
    Customer.all.select do |customer|
      customer.first_name == name
    end
  end

  def self.all_names
    Customer.all.map do |customer|
      customer.full_name
    end
  end

  def add_review(restaurant, content, rating)
    Review.new(self, restaurant, content, rating)
  end

  # def reviewss
  # Review.all.select do |review|
  #   review.customer == self
  #   end
  # end
  # def restaurants
  #   reviewss.map do |review|
  #     review.restaurant
  #   end
  # end

  def restaurants
  cust = Review.all.select do |review|
    review.customer == self
    end
    cust
    cust.map do |review|
      review.restaurant
    end
  end





end
