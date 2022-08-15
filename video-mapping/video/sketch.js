/*
* p5.mapper
* Video on quad surface
* Click to start video
* 
* Jenna deBoisblanc
* jdeboi.com
* 11/16/2021
* 
*/

let pMapper;
let surfaces = [];


// let video1;
// let video2;
let isPlaying = false;

let myFont;

/**
 * aqui eu vou tentar criar uma função video
 * que tem dentro dela outras funções com ações
 * a principio farei com uma função só
 * -- vamo lá: vou criar um loop no preload pra logar os videos OK
 * -- agora vou criar o loop no setup pra criaçao dos quadMap
 * !-- DEU ERRADO
 */
let videos = [];

function preload() {
    myFont = loadFont('assets/Roboto.ttf');
    videos = [createVideo(['assets/ph1.mp4']), createVideo(['assets/animacao3.MOV']), createVideo(['assets/animacao1.mp4'])];
    videos[0].hide();
    videos[1].hide();
    videos[2].hide();
    // for (var i = 0; i < 2; i++) {
    //     videos[i] = createVideo(['assets/animacao2.mp4']);
    //     videos[i].hide();
    // }
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    textFont(myFont);

    // initialize map surfaces
    pMapper = createProjectionMapper(this);
    for (let i = 0; i < 3; i++) {
        surfaces.push(pMapper.createQuadMap(400, 400));
    }
    // quadMap = pMapper.createQuadMap(400, 400);
    // quadMap2 = pMapper.createQuadMap(400, 400);
    // quadMap3 = pMapper.createQuadMap(400, 400);
    // for (var i = 0; i < 10; i++) {
    //     quadMap[i] = pMapper.createQuadMap(video[i].width, video[i].height);
    // }

    pMapper.load("maps/map.json");
}

function draw() {
    HideScrollbar();
    background(0);

    // displayFrameRate();

    let i = 0;
    

    for (const surface of surfaces) {
        surface.clear();
        surface.translate(-surface.width / 2, -surface.height / 2);
        
        if (isPlaying)
            surface.image(videos[i], 0, 0, surface.width,surface.height);
        surface.noFill();
        // surface.texture(videos[i]);
        // surface.rect(0, 0, surface.width, surface.height); 
        i++;       
    }

    // quadMap.clear();
    // quadMap.translate(-quadMap.width / 2, -quadMap.height / 2);
    
    // if (isPlaying)
    //     quadMap.image(video1, 0, 0);
    // quadMap.noStroke();
    // quadMap.texture(video1);
    // quadMap.rect(0, 0, quadMap.width, quadMap.height);
    

    // quadMap2.clear();
    // quadMap2.translate(-quadMap2.width / 2, -quadMap2.height / 2);
    
    // if (isPlaying)
    //     quadMap2.image(video2, 0, 0);
    // quadMap2.noStroke();
    // quadMap2.texture(video2);
    // quadMap2.rect(0, 0, quadMap2.width, quadMap2.height);


}

function keyPressed() {
    switch (key) {
        case 'c':
            pMapper.toggleCalibration();
            break;
        case 'f':
            let fs = fullscreen();
            document.getElementById("header").style.display = "none";
            fullscreen(!fs);
            break;
        case 'l':
            pMapper.load("maps/map.json");
            break;

        case 's':
            pMapper.save("map.json");
            break;
    }
}

function mousePressed() {
    isPlaying = true;
    // video2.loop();
    // video2.loop();
          
    for (var i = 0; i < 3; i++) {
        videos[i].loop();
    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function displayFrameRate() {
    fill(255);
    noStroke();
    text(round(frameRate()), -width / 2 + 20, -height / 2 + 20);
}

function HideScrollbar() {
    var style = document.createElement("style");
    style.innerHTML = `body::-webkit-scrollbar {display: none;}`;
    document.head.appendChild(style);
  }

      
    // for (var i = 0; i < 3; i++) {
    //     videos[i].loop();
    // }