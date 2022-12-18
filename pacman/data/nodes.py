from .node import Node
from constants import *
import numpy as np
from random import randint

class NodeGroup:
	"""Define a group of node
	"""
	def __init__(self) -> None:
		#Nodes Look-Up Tables
		self.nodes_lut = {}
		self.node_symbols = ['+']
		self.path_symbols = ['.']
		data = self.read_maze_file()
		self.create_nodes(data)
		self.connect_nodes(data)


	def render(self, screen) -> None:
		"""Render all nodes
		"""
		for node in self.nodes_lut.values():
			node.render(screen)


	def read_maze_file(self) -> np.ndarray:
		"""Read maze file
		"""
		return np.loadtxt('maze.txt','<U1')


	def generate_maze(self) -> None:
		"""Unsupported feature.
		"""
		pass


	def construct_tile(self, x, y) -> tuple:
		"""Generate maze tile
		"""
		return tuple([x * TILEWIDTH, y * TILEHEIGHT])


	def create_nodes(self, data, x_offset=0, y_offset=0) -> None:
		"""Generate all node from the file
		"""
		for row in list(range(data.shape[0])):
			for col in list(range(data.shape[1])):
				if data[row][col] in self.node_symbols:
					x, y = self.construct_tile(col + x_offset, row + y_offset)
					self.nodes_lut[(x, y)] = Node(x, y)


	def connect_nodes(self, data, x_offset=0, y_offset=0) -> None:
		"""Connect all nodes from node_lut together
		"""
		# Connect horizontaly
		for row in list(range(data.shape[0])):
			key = None
			for col in list(range(data.shape[1])):
				if data[row][col] in self.node_symbols:
					if key is None:
						key = self.construct_tile(col + x_offset, row + y_offset)
					else:
						otherkey = self.construct_tile(col + x_offset, row + y_offset)
						self.nodes_lut[key].neighbors[RIGHT] = self.nodes_lut[otherkey]
						self.nodes_lut[otherkey].neighbors[LEFT] = self.nodes_lut[key]
						key = otherkey
				elif data[row][col] not in self.path_symbols:
					key = None
		#Connect verticaly
		data = data.transpose()
		for col in list(range(data.shape[0])):
			key = None
			for row in list(range(data.shape[1])):
				if data[col][row] in self.node_symbols:
					if key is None:
						key = self.construct_tile(col + x_offset, row + x_offset)
					else:
						otherkey = self.construct_tile(col + x_offset, row + x_offset)
						self.nodes_lut[key].neighbors[DOWN] = self.nodes_lut[otherkey]
						self.nodes_lut[otherkey].neighbors[UP] = self.nodes_lut[key]
						key = otherkey
				elif data[col][row] not in self.path_symbols:
					key = None


	def get_node_from_pixels(self, x, y):
		"""
		"""
		if (x, y) in self.nodes_lut.keys():
			return self.nodes_lut[(x, y)]
		return None


	def get_node_from_tiles(self, col, row):
		"""
		"""
		x, y = self.construct_tile(col, row)
		return self.get_node_from_pixels(x, y)
	
	
	def get_start_node(self) -> Node:
		"""Get a random start node
		"""
		node_list = list(self.nodes_lut.values())
		return node_list[randint(0, len(node_list) - 1)]