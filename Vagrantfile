Vagrant.configure("2") do |config|
  config.vm.box = "opscode-ubuntu-14.04"
  config.vm.box_url = "https://vagrantcloud.com/chef/boxes/ubuntu-14.04/versions/1/providers/vmware_desktop.box"

  if Vagrant.has_plugin?("vagrant-cachier")
    config.cache.scope = :box
    config.cache.synced_folder_opts = {
      type: :nfs,
      mount_options: ['rw', 'vers=3', 'tcp', 'nolock']
    }
  end

  config.omnibus.chef_version = :latest
  config.berkshelf.enabled = true

  #config.vm.hostname = "webapp-ubuntu-1404.vagrantup.com"

  config.vm.define :web do |box|
    box.vm.network "private_network", ip: "192.168.15.12"

    box.vm.synced_folder ".", "/vagrant", nfs: true

    box.vm.provision :chef_solo do |chef|
      chef.synced_folder_type = "nfs"
      chef.add_recipe "ls-dev"
    end
  end
end
