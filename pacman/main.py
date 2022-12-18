from data.engine import Engine


if __name__ == "__main__":
	game = Engine()
	game.start()
	while True: 
		game.update()