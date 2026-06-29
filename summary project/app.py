from flask import Flask,render_template,request,jsonify
from model import summarize_text

app= Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")
@app.route("/summarize",methods=["POST"])
def summarize():
    text=request.json["text"]
    result=summarize_text(text)
    return jsonify({"summary": result})
if __name__ =="__main__":
    app.run(debug=True)