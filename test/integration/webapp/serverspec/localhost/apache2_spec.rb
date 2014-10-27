# Ideas taken from https://github.com/viverae-cookbooks/apache2/blob/master/test/integration/default/serverspec/localhost/default_spec.rb

require 'spec_helper'

describe 'apache2 webserver' do
  describe package('apache2') do
    it { should be_installed }
    #it { should be_version('2.4.7-1ubuntu4.1') } # See issue #1
  end

  describe service('apache2') do
    it { should be_enabled }
    it { should be_running }
  end

  describe port(80) do
    it { should be_listening }
  end

  describe command('apache2ctl -M') do
    its(:stdout) { should match /.*php5_module.*/ }
    its(:stdout) { should match /.*rewrite_module.*/ }
  end

  describe file("/etc/apache2/sites-enabled/#{$node['apache']['config_name']}.conf") do
    it { should be_file }
  end
end
