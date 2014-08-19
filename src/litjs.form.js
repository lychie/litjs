/*___________________________________*\
 |                                   |
 |  Author : Lychie Fan              |
 |  E-Mail : lychie@yeah.net         |
 |  https://github.com/lychie/litjs  |
 |___________________________________|
\*                                   */
var Litjs = (function($){
	$.select = function(selector_id){
		var selector = document.getElementById(selector_id);
		return {
			text : function(){
				return selector.options[selector.selectedIndex].text;
			},
			value : function(){
				return selector.options[selector.selectedIndex].value;
			}
		};
	},
	$.radio = function(group_name){
		return {
			checked : function(){
				var selector = document.getElementsByName(group_name);
				for(var i = 0; i < selector.length; i++){
					if(selector[i].checked)
						return selector[i].value;
				}
			}
		};
	},
	$.checkbox = function(group_name){
		return {
			checked : function(separator){
				if(separator == undefined)
					separator = ",";
				var checked_values = "";
				var selector = document.getElementsByName(group_name);
				for(var i = 0; i < selector.length; i++){
					if(selector[i].checked)
						checked_values += selector[i].value + separator;
				}
				if(checked_values == "")
					return undefined;
				return checked_values.substring(0, checked_values.length - 1);
			}
		};
	},
	$.input = function(selector_id){
		return {
			value : function(val){
				var selector = document.getElementById(selector_id);
				if(val == undefined)
					return selector.value;
				else
					selector.value = val;
			}
		};
	}
	return $;
})(Litjs || {});