/*___________________________________*\
 |                                   |
 |  Author : Lychie Fan              |
 |  E-Mail : lychie@yeah.net         |
 |  https://github.com/lychie/litjs  |
 |___________________________________|
\*                                   */
var Litjs = (function($){
	$.Cookie = {
		add : function(name, value, expire_minutes){
			var expires = "";
			if(expire_minutes != undefined && expire_minutes != 0){
				var curr_date = new Date();
				curr_date.setTime(curr_date.getTime() + expire_minutes * 60 * 1000);
				expires = ";expires=" + curr_date.toGMTString();
			}
			document.cookie = name + "=" + escape(value) + expires;
		},
		get : function(name){
			var value;
			if(document.cookie.length > 0){
				var index = document.cookie.indexOf(name + "=");
				if(index != -1){
					var startIndex = index + name.length + 1;
					var endIndex = document.cookie.indexOf(";", startIndex);
					if(endIndex == -1)
						endIndex = document.cookie.length;
					value = unescape(document.cookie.substring(startIndex, endIndex));
				}
			}
			return value;
		},
		del : function(name){
			var value = this.get(name);
			if(value != undefined)
				this.add(name, value, -1);
		}
	};
	return $;
})(Litjs || {});