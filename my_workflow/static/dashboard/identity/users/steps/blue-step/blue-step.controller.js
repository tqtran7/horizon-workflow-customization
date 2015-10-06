/**
 * Copyright 2015 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may obtain
 * a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

(function() {
  'use strict';

  angular
    .module('horizon.dashboard.identity.users')
    .controller('horizon.dashboard.identity.users.steps.blueStepController', blueStepController);

  blueStepController.$inject = [
    '$scope',
    'horizon.framework.widgets.wizard.events',
    'horizon.dashboard.identity.users.events'
  ];

  /**
   * @ngdoc controller
   * @name horizon.dashboard.identity.users.steps.blueStepController
   */
  function blueStepController($scope, wizardEvents, userEvents) {

    $scope.$on(wizardEvents.ON_SWITCH, function(e, args) {
      console.info('Wizard is switching step!');
      console.info(args);
    });

    $scope.$on(wizardEvents.BEFORE_SUBMIT, function() {
      console.info('About to submit!');
    });
  }

})();
