from flask import Flask,render_template
app=Flask(__name__,template_folder='/home/shri/tribble-media/front', static_folder='/home/shri/tribble-media/front/templates')
@app.route('/')
def data():
    return render_template('home.html')
