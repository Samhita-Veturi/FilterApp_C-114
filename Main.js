Nose_X = 0;
Nose_Y = 0;
function preload(){}
function setup(){
    Canvas = createCanvas(500, 400);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.size(500, 400);
    Video.hide();
    poseNet = ml5.poseNet(Video, modelLoaded)
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("Model Loaded!");
}
function draw(){
    image(Video, 0, 0, 500, 400);
}
function Take_Snap(){
    save('MoustacheImage.png');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        Nose_X = results[0].pose.nose.x;
        Nose_Y = results[0].pose.nose.y;
        console.log("Nose X: " + Nose_X);
        console.log("Nose Y: " + Nose_Y);
    }
}