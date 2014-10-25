include_recipe 'mysql::server'

puts node.inspect
#mysql_database node['app']['mysql']['app']['dbname'] do
#  connection(
#    :host => node['app']['']
#  )
#end