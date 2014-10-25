include_recipe 'apache2'
include_recipe 'apache2::mod_php5'

# Setup vhosts
apache_site "000-default" do
  enable false
end

# Create a new default config
template "#{node['apache']['dir']}/sites-available/default.conf" do
  source 'apache2/app.conf.erb'
  notifies :restart, 'service[apache2]'
end