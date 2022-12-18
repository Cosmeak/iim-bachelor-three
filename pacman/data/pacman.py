import pygame as pg
from constants import *
from .node import Node
from .entity import Entity


class Pacman(Entity):
	"""Use to represent pacman (player)
	"""
	def __init__(self, node:Node) -> None:
		super().__init__(node, PACMAN, YELLOW)


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


	def update(self, delta_time) -> None:
		"""Update pacman
		"""
		self.position += (self.directions[self.direction] * self.speed * delta_time)
		direction = self.get_valid_key()
		self.node = self.target
		self.target = self.get_new_target(direction)
		if self.target is not self.node:
			self.direction = direction
		else:
			self.target = self.get_new_target(self.direction)
		self.set_position()