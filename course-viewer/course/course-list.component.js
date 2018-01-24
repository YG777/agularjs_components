(function() {
  'use strict';
  angular.module('courseViewer').component('courseList', {
    controllerAs: vm,
    controller: function() {
      var vm = this;
      //add $oninit hook
      vm.$oninit = function() {
        vm.courseId = 200; //random sample
      };
    },
    templateUrl: 'course-viewer/course/course-list.component.html'
  });
})();

