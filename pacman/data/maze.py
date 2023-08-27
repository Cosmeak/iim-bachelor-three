from numpy import loadtxt
from .node import Node


class Maze:
	"""Used to represent maze structure
	"""
	NODE_SYMBOL = '+'
	PATH_SYMBOL = '.'
	
	
	def __init__(self, file=None) -> None:
		if file:
			self.file_generation(file)
		# else:
		# 	self.random_generation()



	def file_generation(self, file) -> list[Node]:
		"""Generate maze from a maze file
		"""
		data = loadtxt(file)
		


	def random_generation(self) -> None:
		"""Unsupported feature.
		Generate a maze randomly 
		"""
		pass
