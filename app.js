// (function () {
// 	'use strict';

// 	angular.module('LunchCheckApp', [])
// 	.controller('LunchCheckController', LunchCheckController);

// 	LunchCheckController.$inject = ['$scope'];
// 	function LunchCheckController($scope) {
		
// 		$scope.validateLunch = function () {
			
// 			var items_string = document.getElementById('lunch-menu').value;
// 			var items_empty = items_string.replace(/ /g, "");
// 			items_empty = items_empty.replace(/,/g , "");
// 			var items = items_string.split(",");

// 			if(items_empty == ""){
// 				$scope.message = "Please enter data first";
// 				return;
// 			}
// 			if(items.length <= 3){
// 				$scope.message = "Enjoy!";
// 			}
// 			if(items.length > 3) {
// 				$scope.message = "Too much!";
// 			}
//   	}; 
// 	}
// })();

!function(){"use strict";function e(e){e.validateLunch=function(){var n=document.getElementById("lunch-menu").value,t=n.replace(/ /g,"");t=t.replace(/,/g,"");var c=n.split(",");return""==t?void(e.message="Please enter data first"):(c.length<=3&&(e.message="Enjoy!"),void(c.length>3&&(e.message="Too much!")))}}angular.module("LunchCheckApp",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();