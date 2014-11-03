include_recipe 'MailCatcher'

# Unable to get the mailcatcher::php recipe to work, so have created my own.
# Assuming this is due to PHP 5.6 as the MailCatcher cookbook attempts to place this config
# inside /etc/php/conf.d folder but in PHP 5.6 we use /etc/php5/mods-availabe
template "#{node['mailcatcher']['php']['dir']}/mailcatcher.ini" do
  source "php5/mailcatcher.ini.erb"
  owner "root"
  group "root"
  mode "0644"
  action :create
end

execute 'php5enmod mailcatcher' do
  notifies :restart, 'service[php-fpm]', :delayed
end