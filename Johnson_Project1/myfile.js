var text = $('.text-overflow');
    var btn = $('.btn-overflow');
    var   h = text[0].scrollHeight; 

if(h >150) {
	btn.addClass('less');
	btn.css('display', 'block');
}

btn.click(function(e) 	  
{
	"use strict";
  e.stopPropagation();

  if (btn.hasClass('less')) {
      btn.removeClass('less');
      btn.addClass('more');
      btn.text('Read less');
      text.animate({'height': h});
  } else {
      btn.addClass('less');
      btn.removeClass('more');
      btn.text('Read more');
      text.animate({'height': '150px'});
  }  
});
var text2 = $('.text-overflow2');
    var btn2 = $('.btn-overflow2');
    var   h2 = text[0].scrollHeight; 

if(h >150) {
	btn2.addClass('less');
	btn2.css('display', 'block');
}

btn2.click(function(e) 		  
{
	"use strict";
  e.stopPropagation();

  if (btn2.hasClass('less')) {
      btn2.removeClass('less');
      btn2.addClass('more');
      btn2.text('Read less');
      text2.animate({'height': h2});
  } else {
      btn2.addClass('less');
      btn2.removeClass('more');
      btn2.text('Read more');
      text2.animate({'height': '150px'});
  }  
});