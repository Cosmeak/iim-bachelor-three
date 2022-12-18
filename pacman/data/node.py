import pygame as pg 
from .vector import Vector2D
from constants import *


class Node:
	def __init__(self, x:int, y:int) -> None:
		self.position = Vector2D(x, y)
		self.neighbors = {
			UP: None,
			DOWN: None,
			LEFT: None,
			RIGHT: None,
		}


	def render(self, screen) -> None:
		"""Render Node
		"""
		for i in self.neighbors.keys():
			if self.neighbors[i] is not None:
				line_start = self.position.as_tuple()
				line_end = self.neighbors[i].position.as_tuple()
				pg.draw.line(screen, WHITE, line_start, line_end, 4)
				pg.draw.circle(screen, RED, self.position.as_int(), 12)