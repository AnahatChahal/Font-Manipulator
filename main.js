noseX=0;
noseY=0;
rightWristX=0;
leftWristX=0;
difference=0;

function setup()
{
    canvas= createCanvas(450, 450);
    canvas.position(600, 120);
    video=createCapture(VIDEO);
    video.size(450, 450);
   
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function draw()
{
    background('#6666CC')
    
    textSize(difference);
    fill('#99b3ff');
    stroke('#000000');
    text('Anahat',noseX,noseY);
}

function gotPoses(results)
{
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}