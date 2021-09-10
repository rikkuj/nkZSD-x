noseX = 0;
noseY = 0;
function preload(){

}
function setup(){
    canvas = createCanvas(300,300);
    canvas.position(800,200);
    video = createCapture(VIDEO);
    video.size(300,300)
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video ,0 ,0 , 300, 300);
    fill(250,0,0);
    stroke(250,0,0);
    circle(noseX,noseY,20);

}
function take_snapshot(){
save('My filter image');
}
function modelLoaded(){
    console.log("modelLoaded");
}
function gotPoses(results){
    console.log("inside got poses");
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y-15;
        console.log("nose x =" + noseX);
        console.log("nose y ="+ noseY);
    }
}

