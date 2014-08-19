/*___________________________________*\
 |                                   |
 |  Author : Lychie Fan              |
 |  E-Mail : lychie@yeah.net         |
 |  https://github.com/lychie/litjs  |
 |___________________________________|
\*                                   */
var Litjs = (function($){
	$.Anchor = {
		set : function(){
			var len = arguments.length;
			if(len == 0)
				return ;
			var millisecond = 1000;
			if(len > 1 && !isNaN(arguments[len - 1])){
				len -= 1;
				millisecond = arguments[len];
			}
			for(var i = 0; i < len; i++){
				jQuery(arguments[i]).anchorset(millisecond);
			}
		}
	}
	jQuery.fn.anchorset = function(millisecond){
		var _this = jQuery(this), _position, _link;
		_this.each(function(i){
			jQuery(_this[i]).click(function(){
				_link = jQuery(this).attr("href").substr(1);
				_position = jQuery("#" + _link).offset().top;
				jQuery("html,body").animate({scrollTop : _position}, millisecond);
				return false;
			});
		});
	};
	return $;
})(Litjs || {});