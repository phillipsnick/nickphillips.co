Vagrant.configure("2") do |config|
  # OCD fix to prevent 'stdin: is not a tty' error in Ubuntu provisioning (see #36 for more details)
  config.ssh.pty = true

  config.vm.box = "opscode-ubuntu-14.04"
  #config.vm.provider :vmware_fusion do |p|

  #end

  config.omnibus.chef_version = :latest
  config.berkshelf.enabled = true

  #c.vm.box_url = "https://opscode-vm-bento.s3.amazonaws.com/vagrant/vmware/opscode_ubuntu-14.04_chef-provisionerless.box"
  #config.vm.hostname = "webapp-ubuntu-1404.vagrantup.com"
 # c.vm.network(:private_network, {:ip=>"192.168.102.10"})
  #c.vm.provision "shell", inline: $fix_vmware_tools_script
  #c.vm.provision "chef_solo" do |chef|
  #  chef.run_list = [
  #    'git'
  #  ]
  #end

  config.vm.define :web do |box|
    box.vm.network "private_network", ip: "192.168.11.12"

#    box.vm.synced_folder ".", "/vagrant", disabled: true
#    box.vm.synced_folder ".", "/vagrant", nfs: true

    box.berkshelf.enabled = true

    box.vm.provision :chef_solo do |chef|
      chef.add_recipe 'app::ls-dev'
    end
  end
end
