(function () {
	'use strict';
	var appModule = angular.module('courseViewer', []);

	//variable check - turn the borders on and off
	appModule.value('componentBorders', true);

	//iterate throught all the components and add borders and names to the templates 
	//run function sexecutes as soon as other angular actions are fully loaded
	//accommodating both inline templates and template files
	appModule.run(function (componentBorders) {
		if (componentBorders) {
			if (appModule._invokeQueue) {
				appModule._invokeQueue.forEach(item => {
					if (item[1] == 'component') {
						var componentName = item[2][0];
						var componentProperties = item[2][1];
						if (componentProperties.templateUrl) {
							var templateUrl = componentProperties.templateUrl;
							delete componentProperties.templateUrl;
							componentProperties.template = '<div class="component-borders"><b>' + componentName + '</b><div ng-include="\'' + templateUrl + '\'"></div></div>';
						} else {
							var template = '<div class="component-borders">' + componentName + '<div>' + componentProperties.template + '</div></div>';
							componentProperties.template = template;
						}
					}
				});
			}
		}
	
	});
})();