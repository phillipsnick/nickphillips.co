vcpus     = "2"
memory    = "1024"

Vagrant.configure("2") do |config|
  config.vm.box = "chef/ubuntu-14.04"

  # See issue #34
  #if Vagrant.has_plugin?("vagrant-cachier")
  #  config.cache.scope = :box
  #  config.cache.synced_folder_opts = {
  #    type: :nfs,
  #    mount_options: ['rw', 'noatime']
  #  }
  #end

  if Vagrant.has_plugin?("vagrant-hostmanager")
    config.hostmanager.enabled = true
    config.hostmanager.manage_host = true
  end

  config.omnibus.chef_version = :latest
  config.berkshelf.berksfile_path = "Berksfile"
  config.berkshelf.enabled = true

  config.vm.define :web do |box|
    box.vm.provider "virtualbox" do |v|
      v.cpus    = vcpus
      v.memory  = memory
    end

    box.vm.provider "vmware_fusion" do |v|
      v.vmx["numvcpus"] = vcpus
      v.vmx["memsize"]  = memory
    end

    box.vm.hostname = "nickphillips.dev"
    box.vm.network "private_network", ip: "192.168.15.10"

    box.vm.synced_folder ".", "/vagrant", nfs: true

    box.vm.provision :chef_solo do |chef|
      chef.cookbooks_path       = "./chef/cookbooks/"
      chef.data_bags_path       = "./chef/data_bags"
      chef.custom_config_path   = "./chef/vagrant.rb"
      chef.synced_folder_type   = "nfs"

      chef.add_recipe "ls-dev"
    end
  end
end
