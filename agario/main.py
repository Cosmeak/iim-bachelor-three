import pygame as pg
from constants import GAME_SURFACE
from data.camera import Camera
from data.player import Player
from data.cell import Cell

def main() -> None:
	"""game launch function
	"""
	# Initalize pygame
	pg.init()
	# Set window name
	pg.display.set_caption('Agar.io')

	# Initialize clock
	clock = pg.time.Clock()

	# Create all elements 
	camera = Camera()
	player1 = Player(GAME_SURFACE, camera)
	# TODO: A player2
	# player2:Player = Player(GAME_SURFACE, camera)
	cells:list[Cell] = []
	# Init all cells
	for i in range(2000):
		cell = Cell(GAME_SURFACE, camera)
		cell.draw()
		cells.append(cell)

	is_running: bool = True
	while is_running:
		clock.tick(60)
		for event in pg.event.get():
			if(event.type == pg.KEYDOWN):
				# If player pres escape, close game
				if (event.key == pg.K_ESCAPE):
					is_running = False
			# If event equals to quit, close game
			if (event.type == pg.QUIT):
				is_running = False
		# Player update
		player1.move()
		player1.detectCollision(cells)

		# Fill game suface with color
		GAME_SURFACE.fill((242, 251, 255))

		# Draw element for each frame+
		draw_game(GAME_SURFACE, camera)
		player1.draw()

		for cell in cells: 
			cell.draw()
		
		# Calculate next frame
		pg.display.flip()
	pg.quit()
	quit()

def draw_game(surface:pg.Surface, camera: Camera) -> None:
	# Draw a grid as a background
	for i in range(0,2001,25):
		pg.draw.line(surface, (255, 255, 255), (camera.x, i*camera.zoom + camera.y), (2001*camera.zoom + camera.x, i*camera.zoom + camera.y), 3)
		pg.draw.line(surface, (255, 255, 255), (i*camera.zoom + camera.x, camera.y), (i*camera.zoom + camera.x, 2001*camera.zoom + camera.y), 3)

# Launch game
main()