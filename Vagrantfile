Vagrant.configure("2") do |config|
  # OCD fix to prevent 'stdin: is not a tty' error in Ubuntu provisioning (see #36 for more details)
  #config.ssh.pty = true

  config.vm.box = "opscode-ubuntu-14.04"
  #config.vm.provider :vmware_fusion do |p|
  #//TODO: notes in readme?
  #end

  config.omnibus.chef_version = :latest
  config.berkshelf.enabled = true

  #config.vm.hostname = "webapp-ubuntu-1404.vagrantup.com"

  config.vm.define :web do |box|
    box.vm.network "private_network", ip: "192.168.13.12"

    box.vm.synced_folder ".", "/vagrant", disabled: true
    box.vm.synced_folder ".", "/vagrant", nfs: true

    box.berkshelf.enabled = true

    box.vm.provision :chef_solo do |chef|
      chef.synced_folder_type = 'nfs'
      chef.add_recipe 'ls-dev'
    end
  end
end
