include_recipe "git"

if defined?(node['git'])
  if defined?(node['git']['name'])
    execute "git config name" do
      command "su vagrant -l -c 'git config --global user.name \"#{node['git']['name']}\"'"
    end
  end

  if defined?(node['git']['email'])
    execute "git config email" do
      command "su vagrant -l -c 'git config --global user.email \"#{node['git']['email']}\"'"
    end
  end
end