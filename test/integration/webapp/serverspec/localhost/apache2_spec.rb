require 'spec_helper'

describe 'apache2 webserver' do
  describe package('apache2') do
    it { should be_installed }
    #it { should be_version('2.4.7-1ubuntu4.1') } # See issue #1
  end

  describe command('apache2 -v') do
    its(:stdout) { should match /Server version: Apache\/2.4./ }
  end

  describe service('apache2') do
    it { should be_enabled }
    it { should be_running }
  end

  describe port(80) do
    it { should be_listening }
  end

  describe command('apache2ctl -M') do
    its(:stdout) { should match /proxy_module/ }
    its(:stdout) { should match /proxy_fcgi_module/ }
    its(:stdout) { should match /actions_module/ }
    its(:stdout) { should match /rewrite_module/ }
    its(:stdout) { should match /fastcgi_module/ }
  end

  describe file("/etc/apache2/sites-enabled/#{$node['apache']['config_name']}.conf") do
    it { should be_file }
  end
end
