
(function() {
  	'use strict';
  	angular.module('courseViewer').component('course', {
		binding: {
			courseId: '<'
		},
		controllerAs: 'vm',
		controller: function(){
			var vm = this;
			
		}
    	templateUrl: 'course-viewer/course/course.component.html'
  	});
})();
		
		