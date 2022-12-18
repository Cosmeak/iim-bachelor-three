import math


class Vector2():
	"""Used to represent a vector
	"""
	def __init__(self, x=0, y=0) -> None:
		self.x = x
		self.y = y
		self.thresh = 0.000001


	def __add__(self, other):
		"""Add a vector to another
		"""
		self.x += other.x
		self.y += other.y
		return self


	def __sub__(self, other):
		"""Substract a vector to another
		"""
		self.x -= other.x
		self.y -= other.y
		return self


	def __neg__(self):
		"""Negative vector
		"""
		self.x = -self.x
		self.y = -self.y
		return self


	def __mul__(self, scalar):
		"""Mutliply self by a scalar
		"""
		self.x *= scalar
		self.y *= scalar
		return self


	def __div__(self, scalar):
		"""Divide self by a scalar
		"""
		if scalar != 0:
			self.x /= float(scalar)
			self.y /= float(scalar)
			return self
		return None


	def __equal__(self, other) -> bool:
		"""Check if two vector are equals
		"""
		if abs(self.x - other.x) < self.thresh and abs(self.y - other.y) < self.thresh:
			return True
		return False


	def magnitude_squared(self) -> int:
		"""
		"""
		return self.x**2 + self.y**2


	def magnitude(self) -> float:
		"""Calcul the actual vector length
		"""
		return math.sqrt(self.magnitude_squared())


	def copy(self):
		"""Return a copy of itself
		"""
		return Vector2(self.x, self.y)


	def as_tuple(self) -> tuple:
		"""Return self as a tuple
		"""
		return tuple([self.x, self.y])


	def as_int(self):
		"""Return self as int
		"""
		return int(self.x), int(self.y)


	def __str__(self) -> str:
		"""Return self as a string
		"""
		return "<"+str(self.x)+", "+str(self.y)+">"