/*
author: Developed by Stas Melnikov. http://stas-melnikov.ru
e-mail: melnik909@ya.ru
linkedIn: https://www.linkedin.com/in/melnik909
github: https://github.com/melnik909
facebook: https://www.facebook.com/melnik909
*/

(function($){ 

	var methods = {
		
		init: function(options){

		   return this.each(function(){

				if(!options.container.hasClass("active_container")){
			
					options.container.find(".layer").map(function(){
						
						var time = $(this).attr("data-time"),
						delay = $(this).attr("data-show-delay"),
						show_effect = $(this).attr("data-show-effect");
						
						$(this).addClass("animated " + show_effect).css({'animation-delay' : delay + 'ms',  'animation-duration' : time + 'ms'});
						options.container.addClass("active_container");
					});
				}
			});
		},
		destroy: function(container){

			var show_effect;
		
			container.removeClass("active_container").find(".animated").map(function(indx, element){
					
				show_effect = $(this).attr("data-show-effect");				
				$(this).removeClass("animated").removeClass(show_effect);
			});
		}
	};

	$.fn.magicLayout = function(method){

		if(methods[method]){
			
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
			
		}else if(typeof method === 'object' || ! method){
			
			return methods.init.apply( this, arguments );
			
		}else{
			
			$.error( 'This' +  method + ' is not defined' );
		}
	};
})(jQuery);