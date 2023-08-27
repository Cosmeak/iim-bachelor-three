import random, pygame as pg
from constants import *
from .helper import Helper
from .camera import Camera

class Cell:
  """Represent the food that the player can eat to gain mass
  """
  def __init__(self, surface:pg.Surface, camera:Camera) -> None:
    self.surface:pg.Surface = surface
    self.camera:Camera = camera
    self.x:int = random.randint(20,1980)
    self.y:int = random.randint(20,1980)
    self.mass:float = random.uniform(0.25, 4.0)
    self.color:tuple[int] = Helper.generateColor()
        
  def draw(self) -> None:
    center:tuple[int] = (int(self.x*self.camera.zoom + self.camera.x), int(self.y*self.camera.zoom + self.camera.y))
    pg.draw.circle(self.surface, self.color, center, int(self.mass*2*self.camera.zoom))
