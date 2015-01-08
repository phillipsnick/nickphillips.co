include_recipe 'postgresql::server'
include_recipe 'database::postgresql'

connection_info = {
  :host     => 'localhost',
  :port     => node['postgresql']['config']['port'],
  :username => 'postgres',
  :password => node['postgresql']['password']['postgres']
}

postgresql_database node['postgresql']['app']['dbname'] do
  connection  connection_info
  action      :create
end

postgresql_database_user node['postgresql']['app']['username'] do
  connection    connection_info
  password      node['postgresql']['app']['password']
  database_name node['postgresql']['app']['dbname']
  privileges    [:all]
  action        :create
end

file '/home/vagrant/.pgpass' do
  mode    0600
  owner   'vagrant'
          # hostname:port:database:username:password
  content "localhost:#{node['postgresql']['config']['port']}:*:postgres:#{node['postgresql']['password']['postgres']}"
end