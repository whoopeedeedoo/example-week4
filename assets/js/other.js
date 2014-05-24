 
angular.module('score', ['ui.bootstrap']);
          var staff_width = 530; 
   
          var staff_offset = 10; 
          var staff_height = 2; 
  




    function drawTreble(ctx)
    {
      var scale_num = 0.07; 
      var translate_y = 9;
        ctx.translate(5, -translate_y);
              ctx.scale(scale_num, scale_num);
              ctx.beginPath(); 
              ctx.moveTo(159,3); 
              ctx.quadraticCurveTo(129,50,117,93); 
              ctx.quadraticCurveTo(107,126,102,167); 
              ctx.quadraticCurveTo(101,192,102,210); 
              ctx.quadraticCurveTo(107,255,116,297); 
              ctx.quadraticCurveTo(63,351,44,375); 
              ctx.quadraticCurveTo(24,401,15,429); 
              ctx.quadraticCurveTo(2,464,3,503); 
              ctx.quadraticCurveTo(5,540,20,575); 
              ctx.quadraticCurveTo(29,596,48,615);  
              ctx.quadraticCurveTo(62,630,87,645);  
              ctx.quadraticCurveTo(113,660,150,666); 
              ctx.quadraticCurveTo(177,668,194,665);  
              ctx.quadraticCurveTo(204,720,213,776); 
              ctx.quadraticCurveTo(216,795,216,813); 
              ctx.quadraticCurveTo(203,849,158,857); 
              ctx.quadraticCurveTo(132,857,120,842); 
              ctx.quadraticCurveTo(152,845,166,813); 
              ctx.quadraticCurveTo(165,821,168,802);  
              ctx.quadraticCurveTo(166,775,151,765);  
              ctx.quadraticCurveTo(132,750,107,758); 
              ctx.quadraticCurveTo(86,768,78,789); 
              ctx.quadraticCurveTo(71,818,90,840); 
              ctx.quadraticCurveTo(105,857,129,865);  
              ctx.quadraticCurveTo(149,872,177,865);  
              ctx.quadraticCurveTo(194,860,209,846); 
              ctx.quadraticCurveTo(231,828,230,803); 
              ctx.quadraticCurveTo(221,735,207,662); 
              ctx.quadraticCurveTo(248,650,267,626); 
              ctx.quadraticCurveTo(293,599,296,566); 
              ctx.quadraticCurveTo(300,527,285,494); 
              ctx.quadraticCurveTo(270,462,234,444); 
              ctx.quadraticCurveTo(215,435,189,435); 
              ctx.quadraticCurveTo(177,435,164,438); 
              ctx.quadraticCurveTo(155,396,146,354); 
              ctx.quadraticCurveTo(183,315,203,275); 
              ctx.quadraticCurveTo(219,243,222,210); 
              ctx.quadraticCurveTo(227,167,221,137); 
              ctx.quadraticCurveTo(213,93,192,51); 
              ctx.quadraticCurveTo(180,29,159,3); 
               
              ctx.fill(); 
               
              ctx.fillStyle = "white"; 
              ctx.beginPath(); 
              ctx.moveTo(191,93); 
              ctx.quadraticCurveTo(179,83,171,93); 
              ctx.quadraticCurveTo(126,162,131,281); 
              ctx.quadraticCurveTo(188,239,203,188); 
              ctx.quadraticCurveTo(209,162,204,135); 
              ctx.quadraticCurveTo(200,111,191,93);    
              ctx.fill(); 
               
              ctx.fillStyle = "white"; 
              ctx.beginPath(); 
              ctx.moveTo(171,473); 
              ctx.quadraticCurveTo(188,555,206,648);  
              ctx.quadraticCurveTo(237,639,255,620); 
              ctx.quadraticCurveTo(283,588,283,558); 
              ctx.quadraticCurveTo(285,525,269,501); 
              ctx.quadraticCurveTo(252,476,216,470); 
              ctx.quadraticCurveTo(194,465,171,473); 
               
              ctx.fill(); 
               
              ctx.fillStyle = "white"; 
              ctx.beginPath();  
              ctx.moveTo(147,446); 
              ctx.quadraticCurveTo(141,411,132,369); 
              ctx.quadraticCurveTo(90,401,68,435); 
              ctx.quadraticCurveTo(45,467,39,503); 
              ctx.quadraticCurveTo(30,540,45,576); 
              ctx.quadraticCurveTo(60,612,92,633); 
              ctx.quadraticCurveTo(123,651,161,654); 
              ctx.quadraticCurveTo(174,654,188,653); 
              ctx.fill(); 
               
              ctx.fillStyle = "black"; 
              ctx.beginPath(); 
              ctx.moveTo(147,444); 
              ctx.quadraticCurveTo(120,456,101,480); 
              ctx.quadraticCurveTo(83,504,84,536); 
              ctx.quadraticCurveTo(86,567,107,588); 
              ctx.quadraticCurveTo(114,597,126,605); 
              ctx.quadraticCurveTo(116,593,107,581); 
              ctx.quadraticCurveTo(95,560,99,537); 
              ctx.quadraticCurveTo(105,509,132,491); 
              ctx.quadraticCurveTo(143,482,164,476); 
              
              ctx.fill(); 

              ctx.beginPath(); 
              ctx.scale(1/scale_num, 1/scale_num);

        ctx.translate(-5, translate_y);
    }
    function draw44(ctx)
    {

              var text = "4"; 
              var i = 0;
              
              ctx.translate(30,20); 
               
              while(i<2)
              {

              ctx.textAlign = "left"; // left, center, right 
              ctx.fillStyle = "black"; 
              ctx.strokeStyle = "black"; 
              ctx.font = "bold 24px Calibri "; // 8, 10, 12, 16, 20, 24, 32, 40, 48, 54, 60 
              ctx.textBaseline = "alphabetic"; // top, hanging, middle, alphabetic, ideographic, bottom 
              ctx.fillText(text, 0, 0); 
              ctx.translate(0,19); 
              i++;
              }

              ctx.translate(-30,-58); 
    }



      function drawNote(ctx,x,y, char_i, isRed){ 
        //scale_num
      ctx.scale(0.1,0.1); 
      if(char_i == "0")
      {
        drawRest(ctx, x, y-530, isRed);
      }   
      else if(char_i == "7")
      {
        drawNoteHeadClosed(ctx,x,y, isRed); 
        drawNoteStemDown(ctx,x,y, isRed); 
        drawNoteFlagUp(ctx,x,y, isRed); 
      }   
      else
      {
        drawNoteHeadClosed(ctx,x,y, isRed); 
        drawNoteStemUp(ctx,x,y, isRed); 
        drawNoteFlagDown(ctx,x,y, isRed); 
      }
      
      ctx.scale(10,10);       
      } 
       
      function drawNoteHeadClosed(ctx,x,y, isRed){ 
       
        var x_offset_head = 12;  
        var y_center_head = 74;  
         
        var x_corner = x - x_offset_head; 
        var y_corner = y - y_center_head; 
         
        ctx.save(); 
         
        ctx.translate(x_corner,y_corner); 
        ctx.fillStyle = "black"; 
        if(isRed == 1)
        {
          ctx.fillStyle = "red"; 
        } 
         
        ctx.beginPath(); 
        ctx.moveTo(13,86); 
    
        ctx.quadraticCurveTo(13,118,42,126); 
        ctx.quadraticCurveTo(67,129,101,108); 
        ctx.quadraticCurveTo(136,85,142,57); 
        ctx.quadraticCurveTo(142,28,112,19); 
        ctx.quadraticCurveTo(88,16,54,36); 
        ctx.quadraticCurveTo(19,59,13,86); 
        ctx.fill(); 
        ctx.fillStyle = "black"; 
     
        ctx.restore();     
      } 
       
      function drawNoteStemUp(ctx,x,y, isRed){ 
       
        var x_delta_stem = 133;  
        var y_delta_stem = 36;   
         
        var x_offset_stem = 138; 
        var y_offset_stem = 327; 
             
        var x_corner = x + x_delta_stem - x_offset_stem;  
        var y_corner = y - y_delta_stem - y_offset_stem; 
               
        ctx.save(); 
         
        ctx.translate(x_corner,y_corner); 
             
        ctx.fillStyle = "black"; 
        if(isRed == 1)
        {
          ctx.fillStyle = "red"; 
        } 
        ctx.beginPath(); 
        ctx.moveTo(127,4); 
        ctx.lineTo(135,4); 
        ctx.lineTo(135,342); 
        ctx.lineTo(127,342); 
        ctx.fill();    
        ctx.fillStyle = "black"; 
         
        ctx.restore();   
      }    
   
      function drawNoteFlagDown(ctx,x,y, isRed){ 
    
        var number_of_flags = 0; 
       
        var x_delta_stem = 133;  
        var y_delta_stem = 36;   
         
        var stem_height = 338; 
       
        var x_offset_flag = 17; 
        var y_offset_flag = 12; 
             
        var x_corner = x + x_delta_stem - x_offset_flag;  
        var y_corner = y - y_delta_stem - stem_height + y_offset_flag;  
         
        var flag_distance = 40; 
       
        for(var i=1; i<=number_of_flags; i++) { 
          ctx.save(); 
          if(i==1) { 
            ctx.translate(x_corner,y_corner); 
          } else { 
            ctx.translate(0,flag_distance); 
          } 
           
          ctx.fillStyle = "black";
          if(isRed == 1)
          {
            ctx.fillStyle = "red"; 
          } 
           
          ctx.beginPath(); 
          ctx.moveTo(14,54);     
          ctx.quadraticCurveTo(14,32,14,9); 
          ctx.quadraticCurveTo(24,27,40,38); 
          ctx.quadraticCurveTo(56,50,85,73); 
          ctx.quadraticCurveTo(101,85,110,102); 
          ctx.quadraticCurveTo(115,116,113,131); 
          ctx.quadraticCurveTo(112,131,111,131); 
          ctx.quadraticCurveTo(111,116,102,104); 
          ctx.quadraticCurveTo(76,74,39,61); 
          ctx.quadraticCurveTo(27,57,14,54); 
          ctx.fill();       
          ctx.fillStyle = "black";
        } 
                 
        ctx.restore();         
      } 


      function drawNoteStemDown(ctx,x,y, isRed){ 
       
        var stem_height = 338; 
   
        var x_delta_stem = 12; 
        var y_delta_stem = 36; 
   
        var x_offset_stem = 138; 
        var y_offset_stem = 360; 
   
        var x_corner = x + x_delta_stem - x_offset_stem;  
        var y_corner = y + y_delta_stem + stem_height - y_offset_stem; 
                   
        ctx.save(); 
         
        ctx.translate(x_corner,y_corner); 
             
        ctx.fillStyle = "black"; 
        if(isRed == 1)
        {
          ctx.fillStyle = "red"; 
        }
        ctx.beginPath(); 
        ctx.moveTo(127,4); 
        ctx.lineTo(135,4); 
        ctx.lineTo(135,342); 
        ctx.lineTo(127,342); 
        ctx.fill();    
                
        ctx.fillStyle = "black"; 
        ctx.restore();   
      }    
   
      function drawNoteFlagUp(ctx,x,y, isRed){ 
    
        var number_of_flags = 0; 
   
        var x_delta_stem = 12;  
        var y_delta_stem = 36;   
   
        var stem_height = 338; 
   
        var x_offset_stem = 138; 
        var y_offset_stem = 360; 
   
        var x_offset_flag = 17; 
        var y_offset_flag = 157; 
     
        var x_corner = x + x_delta_stem - x_offset_flag;  
        var y_corner = y + y_delta_stem + stem_height - y_offset_flag;  
        var flag_distance = 40; 
       
        for(var i=1; i<=number_of_flags; i++) { 
          ctx.save(); 
          if(i==1) { 
            ctx.translate(x_corner,y_corner); 
          } else { 
            ctx.translate(0,(-1*flag_distance)); 
          } 
           
          ctx.fillStyle = "black"; 

        if(isRed == 1)
        {
          ctx.fillStyle = "red"; 
        }
           
          ctx.beginPath(); 
          ctx.moveTo(14,86);    
          ctx.quadraticCurveTo(14,108,14,133); 
          ctx.quadraticCurveTo(24,113,40,102); 
          ctx.quadraticCurveTo(56,90,85,67); 
          ctx.quadraticCurveTo(101,55,110,38); 
          ctx.quadraticCurveTo(115,24,113,9); 
          ctx.quadraticCurveTo(112,9,111,9); 
          ctx.quadraticCurveTo(111,24,102,36); 
          ctx.quadraticCurveTo(76,66,39,79); 
          ctx.quadraticCurveTo(27,83,14,86); 
          ctx.fill();
          ctx.fillStyle = "black";       
        } 
                 
        ctx.restore();         
      } 



      function drawRest(ctx,x,y, isRed){     
       
        var x_offset_rest = 17; 
        var y_offset_rest = 19; 
         
        var x_corner = x - x_offset_rest; 
        var y_corner = y - y_offset_rest; 

        ctx.fillStyle = "black"; 
        if(isRed == 1)
        {
          ctx.fillStyle = "red"; 
        }
         
        ctx.save(); 
         
        ctx.translate(x_corner,y_corner); 
         
        ctx.beginPath(); 
        ctx.moveTo(61,19);   
         
        ctx.quadraticCurveTo(64,19,67,19); 
        ctx.quadraticCurveTo(94,68,116,110); 
        ctx.quadraticCurveTo(128,135,115,145); 
        ctx.quadraticCurveTo(47,195,83,252); 
        ctx.quadraticCurveTo(100,277,121,308); 
        ctx.quadraticCurveTo(118,309,117,310); 
        ctx.quadraticCurveTo(100,292,81,286); 
        ctx.quadraticCurveTo(44,276,46,315); 
        ctx.quadraticCurveTo(49,335,59,352); 
        ctx.quadraticCurveTo(59,354,59,358); 
        ctx.quadraticCurveTo(40,335,26,309); 
        ctx.quadraticCurveTo(15,289,18,266);  
        ctx.quadraticCurveTo(21,245,45,248); 
        ctx.quadraticCurveTo(69,252,86,266); 
        ctx.quadraticCurveTo(57,231,35,191); 
        ctx.quadraticCurveTo(16,147,50,118); 
        ctx.quadraticCurveTo(85,89,72,46); 
        ctx.quadraticCurveTo(67,33,61,19); 
   
        ctx.fill(); 
        ctx.fillStyle = "black"; 
        ctx.restore();   
                                         
      }   
