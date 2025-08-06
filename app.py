from flask import Flask, render_template
from pathlib import Path

app = Flask(__name__, template_folder=Path("./templates"))

@app.route('/')
def index():
  return render_template(app.template_folder, 'index.html')

if __name__=='__main__':
    app.run(debug=False)