from modules import script_callbacks
from modules.shared import opts

from ui_customizer.settings import on_ui_settings

def register_settings():
  script_callbacks.on_ui_settings(on_ui_settings)


