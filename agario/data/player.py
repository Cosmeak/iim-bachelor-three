import random, pygame as pg, math
from constants import SCREEN_HEIGHT, SCREEN_WIDTH
from .helper import Helper

class Player:
  """Used to represent the concept of a player.
  """
  def __init__(self, surface:pg.Surface, camera) -> None:
    self.surface = surface
    self.camera = camera
    self.x:int = random.randint(100,400)
    self.y:int = random.randint(100,400)
    self.mass:int = 30
    self.speed:int = 3
    self.color:tuple[int] = Helper.generateColor()

  def draw(self) -> None:
    center:tuple[int] = (int(self.x * self.camera.zoom + self.camera.x), int(self.y * self.camera.zoom + self.camera.y))
    pg.draw.circle(self.surface, self.color, center, int(self.mass))

  def move(self) -> None:
    """Update player postion with the mouse position
    """
    # Get mouse positions
    mx, my = pg.mouse.get_pos()
    # Get angle from mouse to player
    angle:float = math.atan2((mx - self.x), (my - self.y))
    # Rewrite player position
    self.x += math.sin(angle) * self.speed
    self.y += math.cos(angle) * self.speed
    # Update element
    self.camera.update(self)

  def detectCollision(self, elements) -> None:
    """Detects collision between player and cells/players to eat them if possible
    """
    for element in elements:
      # If element is in the player
      if (math.sqrt((element.x-self.x)**2 + (element.y-self.y)**2) < self.mass/2):
        # Check that the player can it the element
        if element.mass < self.mass:
          self.mass += element.mass/3
          elements.remove(element)
  
  def split(self) -> None:
    """Split the player in two cells, the second cells do follow the first
    """
    pass 