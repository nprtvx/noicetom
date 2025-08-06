from flask_frozen import Freezer
from app import app

freezer = Freezer(app)

@freezer.register_generator
def url_generator():
    yield '/'
    yield '/developer/'
    yield '/popeye/'

if __name__=="__main__":
  freezer.freeze()