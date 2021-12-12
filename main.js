nosex = 0;
nosey = 0;

function preload()
{
clown_nose = loadImage('https://i.postimg.cc/hPZ4rHTM/1234567890.png')
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nosex = results[0].pose.nose.x - 85;
        nosey = results[0].pose.nose.y - 90;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(clown_nose, nosex, nosey, 150, 150);
}

function take_snapshot()
{
    save('myFilterImage.png');
}