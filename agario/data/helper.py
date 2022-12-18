import random
class Helper:
	def generateColor() -> tuple[int]:
		"""Generate a random color in RGB format using tuple
		"""
		return tuple(random.randrange(0, 255) for i in range(3))

	def getDistance(a:tuple[int], b:tuple[int]) -> float:
		"""Calculate distance between two elements
		"""
		ax, ay = a
		bx, by = b
		return (((ax-bx)**2) + ((ay-by)**2))**(0.5)
