import base64
import random
import numpy as np
from PIL import Image
import image_processing
import os
from flask import (
    Flask,
    jsonify,
    render_template,
    request,
    make_response,
    send_file,
    send_from_directory,
)
from datetime import datetime
from functools import wraps, update_wrapper
from shutil import copyfile
from flask_cors import CORS
import math

app = Flask(__name__)
# abcdef

APP_ROOT = os.path.dirname(os.path.abspath(__file__))


def nocache(view):
    @wraps(view)
    def no_cache(*args, **kwargs):
        response = make_response(view(*args, **kwargs))
        response.headers["Last-Modified"] = datetime.now()
        response.headers[
            "Cache-Control"
        ] = "no-store, no-cache, must-revalidate, post-check=0, pre-check=0, max-age=0"
        response.headers["Pragma"] = "no-cache"
        response.headers["Expires"] = "-1"
        return response

    return update_wrapper(no_cache, view)


@app.route("/index")
@app.route("/")
@nocache
def index():
    return render_template("home.html", file_path="img/image_here.jpg")


@app.route("/about")
@nocache
def about():
    return render_template("about.html")


@app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    r.headers["Cache-Control"] = "public, max-age=0"
    return r


@app.route("/upload", methods=["POST"])
@nocache
def upload():
    target = os.path.join(APP_ROOT, "static/img")
    if not os.path.isdir(target):
        if os.name == "nt":
            os.makedirs(target)
        else:
            os.mkdir(target)
    for file in request.files.getlist("file"):
        file.save("static/img/img_now.jpg")
    copyfile("static/img/img_now.jpg", "static/img/img_normal.jpg")
    return render_template("uploaded.html", file_path="img/img_now.jpg")


@app.route("/testpost", methods=["GET"])
@nocache
def testpost():
    data = {"name": "Ini adalah respons dari server.", "age": "semester wih"}
    return jsonify(data)


@app.route("/get_image/<filename>")
def get_image(filename):
    return send_from_directory("static/img", filename)


@app.route("/normal", methods=["POST"])
@nocache
def normal():
    image_processing.normal()
    return render_template("uploaded.html", file_path="img/img_now.jpg")


@app.route("/grayscale", methods=["POST"])
@nocache
def grayscale():
    if not (image_processing.is_grey_scale("static/img/img_now.jpg")):
        image_processing.grayscale()
    return render_template("uploaded.html", file_path="img/img_now.jpg")


@app.route("/zoomin", methods=["POST"])
@nocache
def zoomin():
    image_processing.zoomin()
    return render_template("uploaded.html", file_path="img/img_now.jpg")


@app.route("/zoomout", methods=["POST"])
@nocache
def zoomout():
    image_processing.zoomout()
    return render_template("uploaded.html", file_path="img/img_now.jpg")


@app.route("/move_left", methods=["POST"])
@nocache
def move_left():
    image_processing.move_left()
    return render_template("uploaded.html", file_path="img/img_now.jpg")


@app.route("/move_right", methods=["POST"])
@nocache
def move_right():
    image_processing.move_right()
    return render_template("uploaded.html", file_path="img/img_now.jpg")


@app.route("/move_up", methods=["POST"])
@nocache
def move_up():
    image_processing.move_up()
    return render_template("uploaded.html", file_path="img/img_now.jpg")


@app.route("/move_down", methods=["POST"])
@nocache
def move_down():
    image_processing.move_down()
    return render_template("uploaded.html", file_path="img/img_now.jpg")


@app.route("/brightness_addition", methods=["POST"])
@nocache
def brightness_addition():
    image_processing.brightness_addition()
    return render_template("uploaded.html", file_path="img/img_now.jpg")


@app.route("/brightness_substraction", methods=["POST"])
@nocache
def brightness_substraction():
    image_processing.brightness_substraction()
    return render_template("uploaded.html", file_path="img/img_now.jpg")


@app.route("/brightness_multiplication", methods=["POST"])
@nocache
def brightness_multiplication():
    image_processing.brightness_multiplication()
    return render_template("uploaded.html", file_path="img/img_now.jpg")


@app.route("/brightness_division", methods=["POST"])
@nocache
def brightness_division():
    image_processing.brightness_division()
    return render_template("uploaded.html", file_path="img/img_now.jpg")


@app.route("/histogram_equalizer", methods=["POST"])
@nocache
def histogram_equalizer():
    image_processing.histogram_equalizer()
    return render_template("uploaded.html", file_path="img/img_now.jpg")


@app.route("/edge_detection", methods=["POST"])
@nocache
def edge_detection():
    image_processing.edge_detection()
    return render_template("uploaded.html", file_path="img/img_now.jpg")


@app.route("/blur", methods=["POST"])
@nocache
def blur():
    image_processing.blur()
    return render_template("uploaded.html", file_path="img/img_now.jpg")


@app.route("/sharpening", methods=["POST"])
@nocache
def sharpening():
    image_processing.sharpening()
    return render_template("uploaded.html", file_path="img/img_now.jpg")


@app.route("/histogram_rgb", methods=["POST"])
@nocache
def histogram_rgb():
    image_processing.histogram_rgb()
    if image_processing.is_grey_scale("static/img/img_now.jpg"):
        return render_template("histogram.html", file_paths=["img/grey_histogram.jpg"])
    else:        
        return render_template(
            "histogram.html",
            file_paths=[
                "img/red_histogram.jpg",
                "img/green_histogram.jpg",
                "img/blue_histogram.jpg",
            ],
        )


@app.route("/get_histograms", methods=["GET"])
@nocache
def get_images():
    if image_processing.is_grey_scale("static/img/img_now.jpg"):
        image_filenames = ["grey_histogram.jpg"]
        image_path = "static/img"
        image_data = []
    else:
        image_filenames = [
            "red_histogram.jpg",
            "green_histogram.jpg",
            "blue_histogram.jpg",
        ]
        image_path = "static/img"
        image_data = []

    for filename in image_filenames:
        filepath = os.path.join(image_path, filename)
        with open(filepath, "rb") as file:
            image_binary = file.read()
            image_base64 = base64.b64encode(image_binary).decode("utf-8")
        image_data.append({"filename": filename, "data": image_base64})

    return jsonify(images=image_data)


@app.route("/thresholding", methods=["POST"])
@nocache
def thresholding():
    data = request.get_json()
    input_range = data['range']
    lower_thres = input_range[0]
    upper_thres = input_range[1]
    image_processing.threshold(lower_thres, upper_thres)
    return input_range

@app.route("/rotate_clockwise", methods=["POST"])
@nocache
def rotate_clockwise():
    image_processing.rotate_clockwise()
    return render_template("uploaded.html", file_path="img/img_now.jpg")

@app.route("/rotate_counterclockwise", methods=["POST"])
@nocache
def rotate_counterclockwise():
    image_processing.rotate_counterclockwise()
    return render_template("uploaded.html", file_path="img/img_now.jpg")

@app.route("/puzzle/<number>", methods=["POST"])
@nocache
def puzzle(number):
    image_processing.puzle(number)
    return "puzzle berhasil"

@app.route("/get_puzzles/<number>", methods=["GET"])
@nocache
def get_puzzles(number):
    num = int(number)
    puzzle_data =[]
    for row in range(num):
        for col in range(num):
    
            filename = f"puzzle_{row * num + col + 1}.jpg"
            filepath = os.path.join("static/img/puzzle", filename)
            with open(filepath, "rb") as file:
                image_binary = file.read()
                image_base64 = base64.b64encode(image_binary).decode("utf-8")

            puzzle_data.append({"filename": filename, "data": image_base64})

    return jsonify(puzzle=puzzle_data)

@app.route("/get_rgb_values", methods=["GET"])
def get_rgb_values():
    image_path = "static/img/img_now.jpg"  # Ganti dengan path ke citra Anda
    rgb_values = image_processing.calculate_rgb(image_path)
    return jsonify(rgb_values=rgb_values)

@app.route("/zero_padding", methods=["POST"])
@nocache
def zero_padding():
    image_processing.zero_padding()
    return render_template("uploaded.html", file_path="img/img_now.jpg")

@app.route("/lowpass_filter", methods=["POST"])
@nocache
def lowpass_filter():
    data = request.get_json()
    input_array = data['inputArray']
    if len(input_array) == 0:
        image_processing.lowFilterPass()
        kernelSrc = "lowpass default"
    else:
        subarray_length = int(math.sqrt(len(input_array)))
        input_kernel = [input_array[i:i+subarray_length] for i in range(0, len(input_array), subarray_length)]
        image_processing.lowFilterPass(input_kernel)
        kernelSrc = "lowpass custom"
    return kernelSrc

@app.route("/highpass_filter", methods=["POST"])
@nocache
def highpass_filter():
    data = request.get_json()
    input_array = data['inputArray']
    if len(input_array) == 0:
        image_processing.highFilterPass()
        kernelSrc = "highpass default"
    else:
        subarray_length = int(math.sqrt(len(input_array)))
        input_kernel = [input_array[i:i+subarray_length] for i in range(0, len(input_array), subarray_length)]
        image_processing.highFilterPass(input_kernel)
        kernelSrc = "highpass custom"
    return kernelSrc

@app.route("/bandpass_filter", methods=["POST"])
@nocache
def bandpass_filter():
    data = request.get_json()
    input_array = data['inputArray']
    if len(input_array) == 0:
        image_processing.bandFilterPass()
        kernelSrc = "bandpass default"
    else:
        subarray_length = int(math.sqrt(len(input_array)))
        input_kernel = [input_array[i:i+subarray_length] for i in range(0, len(input_array), subarray_length)]
        image_processing.bandFilterPass(input_kernel)
        kernelSrc = "bandpass custom"
    return kernelSrc

@app.route("/gaussian_blur/<kernel_size>", methods=["POST"])
@nocache
def gaussian_blur(kernel_size):
    ksize = int(kernel_size)
    image_processing.gaussianBlur(ksize)
    return render_template("uploaded.html", file_path="img/img_now.jpg")

@app.route("/median_blur/<kernel_size>", methods=["POST"])
@nocache
def median_blur(kernel_size):
    ksize = int(kernel_size)
    image_processing.medianBlur(ksize)
    return render_template("uploaded.html", file_path="img/img_now.jpg")

@app.route("/identity", methods=["POST"])
@nocache
def identity():
    image_processing.identity()
    return "identity"

@app.route("/bilateral", methods=["POST"])
@nocache
def bilateral():
    image_processing.bilateral()
    return "bilateral"

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
