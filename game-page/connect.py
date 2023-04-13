# from flask import Flask, send_file

# app = Flask(__name__)

# @app.route('/game')
# def serve_game():
#     # Path to your game file
#     game_path = 'space_rocks/__main__.py'
#     # Serve the file to the user
#     print(f'Game served to {game_path}')
#     return send_file(game_path)

# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/game')
def game():
    return render_template('game.html')

if __name__ == '__main__':
    app.run(debug=True)
