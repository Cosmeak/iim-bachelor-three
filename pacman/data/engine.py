import pygame as pg
from constants import *
from .pacman import Pacman
from.nodes import NodeGroup


class Engine():
	"""Use to represent the game engine
	"""
	def __init__(self) -> None:
		pg.init()
		self.screen:pg.Surface = pg.display.set_mode(SCREENSIZE, 0, 32)
		self.background:pg.Surface = None
		self.clock = pg.time.Clock()


	def set_background(self) -> None:
		"""Used to create the game background
		"""
		self.background = pg.surface.Surface(SCREENSIZE).convert()
		self.background.fill(BLACK)


	def start(self) -> None:
		"""Used to start the game
		"""
		self.set_background()
		self.nodes = NodeGroup()
		self.pacman = Pacman(self.nodes.start_node())


	def update(self) -> None:
		"""Used to update the game
		"""
		delta_time:float = self.clock.tick(30) / 1000.0
		self.pacman.update(delta_time)
		self.check_events()
		self.render()


	def check_events(self) -> None:
		"""Used to check all events in game and match it to a condition
		"""
		for event in pg.event.get():
			if event.type == pg.QUIT:
				self.quit()
			if event.type == pg.KEYDOWN and event.key == pg.K_ESCAPE:
				self.quit()


	def render(self) -> None:
		"""Used to (re)render the game
		"""
		self.screen.blit(self.background, (0, 0))
		self.nodes.render(self.screen)
		self.pacman.render(self.screen)
		pg.display.update()


	def quit(self) -> None:
		"""Stop and quit game
		"""
		pg.quit()
		quit()