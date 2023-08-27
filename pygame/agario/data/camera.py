from constants import SCREEN_HEIGHT, SCREEN_WIDTH
from .player import Player

class Camera:
  """Camera placement for POV
  """
  def __init__(self) -> None:
    self.x:int = 0
    self.y:int = 0
    self.width:int = SCREEN_WIDTH
    self.height:int = SCREEN_HEIGHT
    self.zoom:float = 0.5

  def update(self, player:Player) -> None:
    self.zoom = 100/player.mass + 0.3
    self.x = (player.x - (player.x*self.zoom)) - player.x + (SCREEN_WIDTH/2)
    self.y = (player.y - (player.y*self.zoom)) - player.y + (SCREEN_HEIGHT/2)