var abc
var b
var r
var name1
var a
var low
var E4
var E5
var E6
var hi = 120

function setup() {
abc = createInput().attribute("placeholder", "Enter the word" )
abc.position(200,200)
b = createButton("Submit")
b.position(350,200)

E1 = createElement("h1")
E1.html("Word")
E1.position(600,50)

E2 = createElement("h1")
E2.html("Bulls")
E2.position(750,50)

E3 = createElement("h1")
E3.html("Cows")
E3.position(900,50)

b.mousePressed(logic)


r = Math.round(random(0,s.length-1))
console.log(r)
name1 =s[r]
console.log(name1)
}

function logic(){
  var Bulls = 0
  var Cows = 0
  
a= abc.value()
low = a.toLowerCase()
console.log(low)

if(low.length!=4){
alert("Enter a four letter word")
}



if(name1.charAt(0) === low.charAt(0)){
Bulls ++
}

if(name1.charAt(1) === low.charAt(1)){
  Bulls ++
  }
  
if(name1.charAt(2) === low.charAt(2)){
  Bulls ++
  }
  
if(name1.charAt(3) === low.charAt(3)){
  Bulls ++
  }
  
if(name1.charAt(0) === low.charAt(1)||name1.charAt(0) ===low.charAt(2)||name1.charAt(0) ===low.charAt(3)){
  Cows ++
  }

  if(name1.charAt(1) === low.charAt(2)||name1.charAt(1) ===low.charAt(3)||name1.charAt(1) ===low.charAt(0)){
    Cows ++
    }
    if(name1.charAt(2) === low.charAt(1)||name1.charAt(2) ===low.charAt(0)||name1.charAt(2) ===low.charAt(3)){
      Cows ++
      }
      if(name1.charAt(3) === low.charAt(1)||name1.charAt(3) ===low.charAt(2)||name1.charAt(3) ===low.charAt(0)){
        Cows ++
        }

        if(low.length === 4){

          for( var i = 0; i<s.length; i++){
            if(s[i].includes(low)){
              break

            //display()
            }
          } 
          if(i<s.length){


            E4 = createElement("h1")
            E4.html(low)
            E4.position(600,hi)

            E5 = createElement("h1")
            E5.html(Bulls)
            E5.position(750,hi)

            E6 = createElement("h1")
            E6.html(Cows)
            E6.position(900,hi)
          
            hi = hi+70
          }
          else if (i===s.length){
            alert("Enter a valid word!")
          }
        }

}



function draw() {
  background(255,255,255);  
  drawSprites();
}
