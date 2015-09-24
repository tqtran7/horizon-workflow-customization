========
my-panel
========

my-panel is written as an example for adding panel based extension to
OpenStack Dashboard. The content is not meant for real use.


Requirements
============

my-panel is intended to use only on systems running Horizon


How to try this package
=======================

1. Git clone this repo to your local machine
2. Run "python setup.py sdist" in my-panel folder
3. Run "./tools/with_venv.sh pip install my-panel/sdist/..tar.gz" in horizon
4. Link or copy files in enabled folder to ``openstack_dashboard/local/enabled``