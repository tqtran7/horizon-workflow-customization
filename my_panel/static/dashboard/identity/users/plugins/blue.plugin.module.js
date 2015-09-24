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

(function () {
  'use strict';

  angular
    .module('horizon.dashboard.identity.users')
    .run(bluePlugin);

  bluePlugin.$inject = [
    'horizon.dashboard.identity.basePath',
    'horizon.dashboard.identity.users.actions.createWorkflowService'
  ];

  function bluePlugin(basePath, workflow) {
    var path = basePath + 'users/steps/';
    workflow.steps.push({
      title: gettext('Blue Step'),
      templateUrl: path + 'blue-step/blue-step.html',
      helpUrl: path + 'blue-step/blue-step.help.html',
      formName: 'blueStepForm'
    });
  }

})();
