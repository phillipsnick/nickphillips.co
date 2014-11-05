# Ensure that VMWare Tools recompiles kernel modules
# when we update the linux images
$fix_vmware_tools_script = <<SCRIPT
sed -i.bak 's/answer AUTO_KMODS_ENABLED_ANSWER no/answer AUTO_KMODS_ENABLED_ANSWER yes/g' /etc/vmware-tools/locations
sed -i.bak 's/answer AUTO_KMODS_ENABLED no/answer AUTO_KMODS_ENABLED yes/g' /etc/vmware-tools/locations
SCRIPT

Vagrant.configure("2") do |c|
  c.vm.box = "opscode-ubuntu-14.04"
  c.vm.box_url = "https://opscode-vm-bento.s3.amazonaws.com/vagrant/vmware/opscode_ubuntu-14.04_chef-provisionerless.box"
  c.vm.hostname = "webapp-ubuntu-1404.vagrantup.com"
  c.vm.network(:private_network, {:ip=>"192.168.102.10"})
  c.vm.provision "shell", inline: $fix_vmware_tools_script
  c.vm.synced_folder ".", "/vagrant", disabled: true
  c.vm.synced_folder "/Users/x1nick/Sites/projects/nickphillips.co", "/vagrant", nfs: true
  c.vm.provider :vmware_fusion do |p|
  end
end
