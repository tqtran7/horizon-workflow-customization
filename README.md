===========
my_workflow
===========

my_workflow is an example of adding a workflow extension to the
OpenStack Dashboard. The content is not meant for real use.


Requirements
============

my_workflow is intended to use only on systems running Horizon


How to test this package
========================

1. Git clone this repo to your local machine
2. Run "python setup.py sdist" in the folder
3. Run "./tools/with_venv.sh pip install my_workflow/sdist/..tar.gz" in horizon
4. Copy files in the enabled folder to ``openstack_dashboard/local/enabled``
5. Restart Apache or your Django test server