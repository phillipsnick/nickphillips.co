include_recipe 'nodejs'

nodejs_npm 'bower'
nodejs_npm 'grunt'
nodejs_npm 'grunt-cli'
nodejs_npm 'karma'
nodejs_npm 'karma-cli'

execute "npm install" do
  command "su vagrant -l -c 'cd /vagrant && npm install'"
end