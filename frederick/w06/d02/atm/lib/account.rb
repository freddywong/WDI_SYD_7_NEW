class Account
	def initialize
		@amount = 0
	end

	def deposit(amount)
		@amount += amount
	end

	def balance
		@amount
	end

end