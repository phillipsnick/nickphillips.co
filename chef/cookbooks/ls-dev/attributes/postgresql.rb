default['postgresql']['version']  =                     '9.4'
default['postgresql']['password']['postgres'] =         'postgres'

default['postgresql']['dir'] =                          "/etc/postgresql/#{default['postgresql']['version']}/main"
default['postgresql']['client']['packages'] =           ["postgresql-client-#{default['postgresql']['version']}", "libpq-dev"]
default['postgresql']['server']['packages'] =           ["postgresql-#{default['postgresql']['version']}"]
default['postgresql']['contrib']['packages'] =          ["postgresql-contrib-#{default['postgresql']['version']}"]

default['postgresql']['config']['data_directory'] =     "/var/lib/postgresql/#{default['postgresql']['version']}/main"
default['postgresql']['config']['hba_file'] =           "/etc/postgresql/#{default['postgresql']['version']}/main/pg_hba.conf"
default['postgresql']['config']['ident_file'] =         "/etc/postgresql/#{default['postgresql']['version']}/main/pg_ident.conf"
default['postgresql']['config']['external_pid_file'] =  "/var/run/postgresql/#{default['postgresql']['version']}-main.pid"
default['postgresql']['config']['listen_addresses'] =   '*'

default['postgresql']['pg_hba'] = [
    {:type => 'local', :db => 'all', :user => 'postgres', :addr => nil, :method => 'ident'},
    {:type => 'local', :db => 'all', :user => 'all', :addr => nil, :method => 'ident'},
    {:type => 'host', :db => 'all', :user => 'all', :addr => '0.0.0.0/0', :method => 'md5'},
    {:type => 'host', :db => 'all', :user => 'all', :addr => '::1/128', :method => 'md5'}
]

default['postgresql']['app']['username'] =              'app'
default['postgresql']['app']['password'] =              'app'
default['postgresql']['app']['dbname'] =                'app'