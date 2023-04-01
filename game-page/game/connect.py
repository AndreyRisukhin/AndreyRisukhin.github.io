from flask import Flask, send_file

app = Flask(__name__)

@app.route('/game')
def serve_game():
    # Path to your game file
    game_path = 'space_rocks/__main__.py'
    # Serve the file to the user
    return send_file(game_path)

if __name__ == '__main__':
    app.run()
