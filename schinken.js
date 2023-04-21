$(document).ready(function(){
  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  var bool1 = true;
  var bool2 = false;
  var bool3 = false;
  JoNa();

  $("#einfschink").click(function(){
    document.getElementById("einfschink").style.background = '#664A30';
    document.getElementById("pikaschink").style.background = '#a77a50';
    document.getElementById("topfschink").style.background = '#a77a50';
    bool1 = true;
    bool2 = false;
    bool3 = false;
  });

  $("#pikaschink").click(function(){
    document.getElementById("einfschink").style.background = '#a77a50';
    document.getElementById("pikaschink").style.background = '#664A30';
    document.getElementById("topfschink").style.background = '#a77a50';
    bool1 = false;
    bool2 = true;
    bool3 = false;
  });
  
  $("#topfschink").click(function(){
    document.getElementById("einfschink").style.background = '#a77a50';
    document.getElementById("pikaschink").style.background = '#a77a50';
    document.getElementById("topfschink").style.background = '#664A30';
    bool1 = false;
    bool2 = false;
    bool3 = true;
  });

  
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  var output1 = document.getElementById("demo1");
  var output2 = document.getElementById("demo2");
  var output3 = document.getElementById("demo3");
  var output4 = document.getElementById("demo4"); 



    async function JoNa(){
      await delay(5);
      if(bool1){
        FIckdi();
      }
      else if(bool2){
        FickDi2();
      }
      else if(bool3){
        okesduadmaloadkaFickdi();
      }
      await delay(5);
      JoNa();
    }

    function FIckdi(){
    output.innerHTML = slider.value;
    output1.innerHTML = slider.value*50;
    output2.innerHTML = slider.value*100;
    output3.innerHTML = slider.value*2/5;
    output4.innerHTML = slider.value*0.04;
    
    slider.oninput = function() {
      output.innerHTML = this.value;
      output1.innerHTML = this.value*50;
      output2.innerHTML = this.value*100;
      output3.innerHTML = this.value*2/5;
      output4.innerHTML = this.value*0.04;
    }
  }
    function FickDi2(){
      output.innerHTML = slider.value;
      output1.innerHTML = slider.value*62.5;
      output2.innerHTML = slider.value*95;
      output3.innerHTML = slider.value*1/2;
      output4.innerHTML = slider.value*0.01;
      
      slider.oninput = function() {
        output.innerHTML = this.value;
        output1.innerHTML = this.value*62.5;
        output2.innerHTML = this.value*95;
        output3.innerHTML = this.value*1/2;
        output4.innerHTML = this.value*0.01;
      }
    }

    function okesduadmaloadkaFickdi(){
      output.innerHTML = slider.value;
      output1.innerHTML = slider.value*25;
      output2.innerHTML = slider.value*62.5;
      output3.innerHTML = slider.value*1/2;
      output4.innerHTML = slider.value*0.01;
      
      slider.oninput = function() {
        output.innerHTML = this.value;
        output1.innerHTML = this.value*25;
        output2.innerHTML = this.value*62.5;
        output3.innerHTML = this.value*1/2;
        output4.innerHTML = this.value*0.01;
      }
    }



  });