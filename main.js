//animate smooth scroll
$('#view-work').on('click',function(){
	const images=$('#images').position().top;
$('html','body').animate({
	scrollTop:images
},
900
);
});


  var radius = 8;
  TweenMax.staggerFromTo('.blob', 4 ,{
    cycle: {
      attr:function(i) {
        var r = i*90;
        return {
          transform:'rotate('+r+') translate('+radius+',0.1) rotate('+(-r)+')'
        }      
      }
    }  
  },{
    cycle: {
      attr:function(i) {
        var r = i*90+360;
        return {
          transform:'rotate('+r+') translate('+radius+',0.1) rotate('+(-r)+')'
        }      
      }
    },
    ease:Linear.easeNone,
    repeat:-1
  });

// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// let xhr=new XMLHttpRequest();
// xhr.open('GET','https://json/placeholder.typicode.com/posts');
// xhr.send();
// const fetch = require("node-fetch");
// fetch('https://jsonplaceholder.typicode.com/todos')
// 	.then(function (response) {
// 		return response.json();
// 	})
// 	.then(function (data) {
// 		console.log('success', data);
// 	})
// 	.catch(function (error) {
// 		console.log('error', error);
// 	})//
