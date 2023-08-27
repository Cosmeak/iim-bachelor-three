import pygame as pg
from constants import *
from .vector import Vector2D
from .node import Node
from random import randint


class Entity:
	"""Abstract class for ghost and pacman
	"""
	def __init__(self, node:Node, name=None, color=None) -> None:
		self.name = name
		self.color = color
		# All possible direction
		self.directions = {
			STOP:Vector2D(), 
			UP:Vector2D(0,-1), 
			DOWN:Vector2D(0,1), 
			LEFT:Vector2D(-1,0), 
			RIGHT:Vector2D(1,0)
		}
		# Actual direction
		self.direction = STOP
		self.set_speed(100)
		self.radius:int = 10
		self.collide_radius:float = self.radius / 2
		self.node:Node = node
		self.set_position()
		self.target:Node = node
		self.visible:bool = True


	def update(self, delta_time) -> None:
		"""Update entity
		"""
		pass


	def set_speed(self, speed) -> None:
		"""Set entity speed
		"""
		self.speed = speed * TILEWIDTH / 16
	

	def set_position(self) -> None:
		"""Set position to the node position with the copy function from node
		"""
		self.position  = self.node.position.copy()


	def get_new_target(self, direction):
		"""Try to get a new direction with known node link to actual
		"""
		if self.valid_direction(direction):
			return self.node.neighbors[direction]
		return self.node


	def valid_direction(self, direction) -> bool:
		"""Check if pacman direction is possible with the node set and if pacman is not stop
		"""
		if direction is not STOP and self.node.neighbors[direction] is not None:
			return True
		return False


	def reverse_direction(self) -> None:
		"""Reverse pacman direction at any moment in movement 
		"""
		self.direction *= -1
		self.node, self.target = self.target, self.node


	def render(self, screen) -> None:
		"""Render entity on screen
		"""
		if self.visible:
			pg.draw.circle(screen, self.color, self.position.as_int(), self.radius)
