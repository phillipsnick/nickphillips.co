Vagrant.configure("2") do |c|
  c.vm.box = "parallels/ubuntu-14.04"

  c.vm.hostname = "default-ubuntu-1404.vagrantup.com"
  c.vm.network(:private_network, {:ip=>"33.33.33.33"})
  c.vm.synced_folder ".", "/vagrant", disabled: true
  c.vm.provider :parallels do |p|
  end
end
