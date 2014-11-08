include_recipe 'mysql::server'
include_recipe 'database::mysql'

mysql_database node['mysql']['app']['dbname'] do
  connection(
      :host => node['mysql']['app']['host'],
      :username => 'root',
      :password => node['mysql']['server_root_password']
  )
  action :create
end

mysql_database_user node['mysql']['app']['username'] do
  connection(
      :host => node['mysql']['app']['host'],
      :username => 'root',
      :password => node['mysql']['server_root_password']
  )
  password node['mysql']['app']['password']
  database_name node['mysql']['app']['dbname']
  host node['mysql']['app']['host']
  action [:create, :grant]
end