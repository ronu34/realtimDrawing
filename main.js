let noseX = null;
let noseY = null;    
let difference = null;
let wristX = null;
let wirstY = null;

function preload() {}

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',getPoses);
}



function draw() {
    background("#FF0000");

    fill('#F90093');

    stroke('#F90093');

    square(noseX,noseY,difference);
}

function modelLoaded() {
    console.log("Model Loaded");
}

function getPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        wristX = results[0].pose.leftWrist.x;
        wristY = results[0].pose.rightWrist.x;

        difference = floor(wristX - wristY);

        console.log("Wrist left = "+wristX+";\n Wrist Right = "+wirstY);

        console.log("Nose X = "+noseX+";\n Nose Y = "+noseY);
    }
}