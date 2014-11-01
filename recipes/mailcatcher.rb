include_recipe 'MailCatcher'
#include_recipe 'app::apache2'

# Unable to get the mailcatcher::php recipe to work, so have created my own.
# Assuming this is due to PHP 5.6
template "#{node['mailcatcher']['php']['dir']}/mailcatcher.ini" do
  source "php5/mailcatcher.ini.erb"
  owner "root"
  group "root"
  mode "0644"
  action :create
end

execute 'php5enmod mailcatcher' do
  #notifies :restart, 'serivce[apache2]'
end