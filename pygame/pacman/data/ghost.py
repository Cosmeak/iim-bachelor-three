from .entity import Entity
from random import randint
from constants import *
from .node import Node
from .vector import Vector2D


class Ghost(Entity):
	"""Use to represent the ghost (pacman enemies)
	"""
	def __init__(self, node:Node) -> None:
		super().__init__(node, GHOST, WHITE)
		self.points = 200
		self.goal = Vector2D()


	def directions_valid(self):
		"""Check all possible direction arround the ghost
		"""
		directions = []
		for direction in [UP, DOWN, LEFT, RIGHT]:
			if self.valid_direction(direction):
				if direction != self.direction * -1:
					directions.append(direction)
		if len(directions) == 0:
			directions.append(self.direction * -1)
		return directions


	def random_direction(self):
		"""Return a random available direction
		"""
		directions:list = self.directions_valid()
		return directions[randint(0, len(directions) - 1)]


	def update(self, delta_time) -> None:
		"""Update ghost
		"""
		self.position += self.directions[self.direction] * self.speed * delta_time
		self.node = self.target
		direction = self.goal_direction(self.directions_valid())
		if self.target is not self.node:
			self.direction = direction
		else:
			self.target = self.get_new_target(self.direction)
		self.set_position()


	def goal_direction(self, directions):
		"""Get the goat direction
		"""
		distances = []
		for direction in directions:
			vector = self.node.position  + self.directions[direction] * TILEWIDTH - self.goal
			distances.append(vector.magnitude_squared())
		index = distances.index(min(distances))
		return directions[index]

