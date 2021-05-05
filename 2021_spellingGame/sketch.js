const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var canvas;
var bgImg;
var bg = "bg.png";
//var state = 0
var letter_4words
var rand 
var l1_y=10, l2_y=10, l3_y=10,l4_y=10;




function preload(){
    outputBox = loadImage("outputBox.png");
    bgImg = loadImage(bg);
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);

    engine = Engine.create();
    world = engine.world;

    // console.log(letter_4words[0])

    out1 = createSprite(1*(windowWidth/8), windowHeight-(windowWidth/8), windowWidth/4, windowWidth/4);
    out2 = createSprite(3*(windowWidth/8), windowHeight-(windowWidth/8), windowWidth/4, windowWidth/4);
    out3 = createSprite(5*(windowWidth/8), windowHeight-(windowWidth/8), windowWidth/4, windowWidth/4);
    out4 = createSprite(7*(windowWidth/8), windowHeight-(windowWidth/8), windowWidth/4, windowWidth/4);

    out1.addImage("outputBox.png", outputBox)
    out2.addImage("outputBox.png", outputBox)
    out3.addImage("outputBox.png", outputBox)
    out4.addImage("outputBox.png", outputBox)

    out = [out1,out2,out3,out4]

    letter1 = createButton(letter_4words[0][0]);
    letter1.position(1*(windowWidth/8),l1_y);
    letter1.style("background-color","yellow");
    letter1.style("border-radius","25px");
    // letter1.style.fontSize = "40px"
    letter1.size(100,100);
    letter1.mousePressed(()=>{
        switch(out.length){
            case 1:
                letter1.position(out4.x,out4.y)
                out.pop();
                break
            case 2:
                letter1.position(out3.x,out3.y)
                out.pop();
                break
            case 3:
                letter1.position(out2.x,out2.y)
                out.pop();
                break
            case 4:
                letter1.position(out1.x,out1.y)
                out.pop();
                break

        }
    })

    letter2 = createButton(letter_4words[0][1]);
    letter2.position(3*(windowWidth/8),l2_y);
    letter2.style("background-color","yellow");
    letter2.style("border-radius","25px");
    // letter1.style.fontSize = "40px"
    letter2.size(100,100);
    letter2.mousePressed(()=>{
        switch(out.length){
            case 1:
                letter2.position(out4.x,out4.y)
                out.pop();
                break
            case 2:
                letter2.position(out3.x,out3.y)
                out.pop();
                break
            case 3:
                letter2.position(out2.x,out2.y)
                out.pop();
                break
            case 4:
                letter2.position(out1.x,out1.y)
                out.pop();
                break

        }
    })

    letter3 = createButton(letter_4words[0][2]);
    letter3.position(5*(windowWidth/8),l3_y);
    letter3.style("background-color","yellow");
    letter3.style("border-radius","25px");
    // letter1.style.fontSize = "40px"
    letter3.size(100,100);
    letter3.mousePressed(()=>{
        switch(out.length){
            case 1:
                letter3.position(out4.x,out4.y)
                out.pop();
                break
            case 2:
                letter3.position(out3.x,out3.y)
                out.pop();
                break
            case 3:
                letter3.position(out2.x,out2.y)
                out.pop();
                break
            case 4:
                letter3.position(out1.x,out1.y)
                out.pop();
                break

        }
    })

    letter4 = createButton(letter_4words[0][3]);
    letter4.position(7*(windowWidth/8),l4_y);
    letter4.style("background-color","yellow");
    letter4.style("border-radius","25px");
    // letter1.style.fontSize = "40px"
    letter4.size(100,100);
    letter4.mousePressed(()=>{
        switch(out.length){
            case 1:
                letter4.position(out4.x,out4.y)
                out.pop();
                break
            case 2:
                letter4.position(out3.x,out3.y)
                out.pop();
                break
            case 3:
                letter4.position(out2.x,out2.y)
                out.pop();
                break
            case 4:
                letter4.position(out1.x,out1.y)
                out.pop();
                break

        }
    })

    test = new LetterBody(100,100);

}

function draw(){
    background(bgImg)
    Engine.update(engine)

/* 
    if (keyIsDown(UP_ARROW)){
        state = 1
        console.log("ADGUBhjgvfyrhgubinjugftrvghbuyrx")
    }
    if (state==0){
        PickWord();
    }
*/
    
    
    //test.display();
    /*for (var i=0; i<windowHeight-(windowWidth/8); i++){
        l1_y+=1
        l2_y+=1
    }*/
    generateWrongWord()
    drawSprites();
}

function PickWord(){
    // Generate random line number form dictionary words.
    var randomNumber = Math.floor(Math.random() * 1747) + 1;   
    console.log(randomNumber)
}

function generateWrongWord(){
    rand = Math.round(random(0,1747))

    wrongWord = ""

    var str = letter_4words[rand]; 
    var res1 = str.slice(0,1);
    var res2 = str.slice(1,2);
    var res3 = str.slice(2,3);
    var res4 = str.slice(3,4);
    res = res1+res2+res3+res4
    var rand = Math.round(random(1,4))
    switch (rand){
        case 1:
          res = res2+res3+res1+res4
          break
      case 2:
          res = res2+res1+res4+res3
          break
      case 3:
          res = res3+res4+res2+res1
          break
      case 4:
          res = res1+res3+res2+res4
          break
    }
    //console.log(res)
    //console.log(letter_4words[rand])
}
