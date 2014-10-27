include_recipe "apt"

# Setup PPA for PHP 5.6 - https://launchpad.net/~ondrej/+archive/ubuntu/php5-5.6
#apt_repository "php56" do
#  uri           'http://ppa.launchpad.net/ondrej/php5-5.6/ubuntu'
#  distribution  node['lsb']['codename']
#  components   ['main']
#  keyserver    'keyserver.ubuntu.com'
#  key          'E5267A6C'
#end