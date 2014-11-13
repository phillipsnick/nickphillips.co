include_recipe 'phpmyadmin'

phpmyadmin_db 'root' do
  host      node['mysql']['app']['host']
  username  'root'
  password  node['mysql']['server_root_password']
end

template "#{node['apache']['dir']}/sites-available/phpmyadmin.conf" do
  source 'phpmyadmin/phpmyadmin.conf.erb'
  notifies :restart, 'service[apache2]', :delayed
end

apache_site "phpmyadmin" do
  enabled true
end