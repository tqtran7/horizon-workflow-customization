# The name of the panel to be added to HORIZON_CONFIG. Required.
PANEL = 'my_panel'

# The name of the dashboard the PANEL associated with. Required.
PANEL_DASHBOARD = 'identity'

# The name of the panel group the PANEL is associated with.
PANEL_GROUP = 'default'

# Python panel class of the PANEL to be added.
#ADD_PANEL = 'my_panel.panel.MyPanel'

ADD_INSTALLED_APPS = ['my_panel']

# ADD_ANGULAR_MODULES = [
#   'horizon.dashboard.myfeature',
# ]

AUTO_DISCOVER_STATIC_FILES = True

# ADD_JS_FILES = [
#   'dashboard/identity/users/steps/plugin-step-a/plugin-step-a.controller.js',
#   'dashboard/identity/users/actions/create.workflow.service.js'
# ]

# ADD_SCSS_FILES = [
#   'dashboard/admin/my-panel/my-panel.scss'
# ]