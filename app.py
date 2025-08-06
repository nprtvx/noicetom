from flask import Flask, render_template
from pathlib import Path
from src import popeyethedev as popeye

app = Flask(__name__, template_folder=Path("./templates"))

@app.route('/')
def index():
  return render_template('index.html')

if __name__=='__main__':
    app.run(debug=False)