include_recipe 'ls-dev::apt'
include_recipe 'curl'
include_recipe 'ls-dev::git'
include_recipe 'ls-dev::php'
include_recipe 'ls-dev::apache2'
include_recipe 'ls-dev::postgresql'
include_recipe 'memcached'
include_recipe 'ls-dev::mailcatcher'
include_recipe 'composer'
include_recipe 'phpunit'
include_recipe 'ls-dev::nodejs'
include_recipe 'imagemagick'
include_recipe 'phantomjs'

#- recipe[test-helper::default]
