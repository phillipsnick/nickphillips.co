include_recipe 'apache2'
include_recipe 'apache2::mod_php5'

#package 'apache2' do
#  version node['apache']['version']
#  action :install
#end
#package 'apache2' do
#  package_name node['apache']['package']
#end

# Setup vhosts
#apache_site "000-default" do
#  enable false
#end

template "#{node['apache']['dir']}/sites-available/#{node['apache']['config_name']}.conf" do
  source 'apache2/app.conf.erb'
  notifies :restart, 'service[apache2]'
end

apache_site "#{node['apache']['config_name']}" do
  enabled true
end