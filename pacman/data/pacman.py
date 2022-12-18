import pygame as pg
from constants import *
from .vector import Vector2
from .node import Node


class Pacman():
	"""Use to represent pacman (player)
	"""
	def __init__(self, node: Node) -> None:
		self.name = PACMAN
		# All possible direction
		self.directions = {
			STOP:Vector2(), 
			UP:Vector2(0,-1), 
			DOWN:Vector2(0,1), 
			LEFT:Vector2(-1,0), 
			RIGHT:Vector2(1,0)
		}
		# Actual player direction
		self.direction = STOP
		self.speed:int = 100
		self.radius:int = 10
		self.color = YELLOW
		self.node:Node = node
		self.set_position()
		self.target = node


	def update(self, delta_time) -> None:
		"""Update the player
		"""
		self.position += self.directions[self.direction] * self.speed * delta_time
		direction = self.get_valid_key()
		self.node = self.target
		self.target = self.get_new_target(direction)
		if self.target is not self.node:
			self.direction = direction
		else:
			self.target = self.get_new_target(self.direction)

		if self.target is self.node:
			self.direction = STOP
		self.set_position()


	def get_valid_key(self) -> int:
		"""Get a valid key down 
		"""
		key_pressed = pg.key.get_pressed()
		if key_pressed[pg.K_UP] or key_pressed[pg.K_z]:
			return UP
		if key_pressed[pg.K_DOWN] or key_pressed[pg.K_s]:
			return DOWN
		if key_pressed[pg.K_LEFT] or key_pressed[pg.K_q]:
			return LEFT
		if key_pressed[pg.K_RIGHT] or key_pressed[pg.K_d]:
			return RIGHT
		return STOP


	def render(self, screen) -> None:
		"""Render player on screen
		"""
		pg.draw.circle(screen, self.color, self.position.as_int(), self.radius)


	def set_position(self) -> None:
		"""Set position to the node position with the copy function from node
		"""
		self.position  = self.node.position.copy()


	def valid_direction(self, direction) -> bool:
		"""Check if pacman direction is possible with the node set and if pacman is not stop
		"""
		if direction is not STOP and self.node.neighbors[direction] is not None:
			return True
		return False


	def get_new_target(self, direction):
		"""Try to get a new direction with known node link to actual
		"""
		if self.valid_direction(direction):
			return self.node.neighbors[direction]
		return self.node

	# def node_reached(self):
	# 	"""Check if a node has been reached
	# 	"""
	# 	if self.target is not None:


	def reverse_direction(self) -> None:
		"""Reverse pacman direction at any moment in movement 
		"""
		self.direction *= -1
		self.node, self.target = self.target, self.node
