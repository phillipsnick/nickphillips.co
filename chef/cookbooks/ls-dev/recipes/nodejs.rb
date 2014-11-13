include_recipe 'nodejs'

nodejs_npm 'bower'
nodejs_npm 'grunt'
nodejs_npm 'grunt-cli'

execute "npm install" do
  command "su vagrant -l -c 'cd /vagrant && npm install'"
end