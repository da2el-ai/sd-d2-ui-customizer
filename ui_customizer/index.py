import modules.scripts as scripts

from ui_customizer import callbacks

class Script(scripts.Script):
    def __init__(self):
      super().__init__()

      callbacks.register_settings()

    def title(self):
        return "D2 UI Customizer"

    def show(self, is_img2img):
        return False

