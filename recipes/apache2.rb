include_recipe 'apache2'

package 'apache2-mpm-worker'
package 'libapache2-mod-fastcgi'

template "#{node['apache']['dir']}/mods-available/fastcgi.conf" do
  source "apache2/fastcgi.conf.erb"
  notifies :reload, 'service[apache2]', :delayed
end

apache_module 'proxy'
apache_module 'proxy_fcgi'
apache_module 'actions'
apache_module 'fastcgi'

template "#{node['apache']['dir']}/sites-available/#{node['apache']['config_name']}.conf" do
  source 'apache2/app.conf.erb'
  notifies :restart, 'service[apache2]'
end

apache_site "#{node['apache']['config_name']}" do
  enabled true
end