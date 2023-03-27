Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:100
    
})

camera=document.getElementById("camera");
Webcam.attach("#camera")

function take_snapshot(){

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img src="+data_uri+" id='captured_image'/>"
    })
};

console.log("ml5 version",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9TIhTnat2/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model is Loaded");
}

function check(){
img=document.getElementById("captured_image");
classifier.classify(img,getResult);


}

function getResult(error,results){
    if(error){
        console.log(error);

    } else{
        console.log(results);
       document.getElementById("name").innerHTML=results[0].label;
       document.getElementById("accuracy").innerHTML=(results[0].confidence*100).toFixed(2)+"%";
    }


}
