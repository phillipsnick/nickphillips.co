require 'spec_helper'

describe 'mysql database server' do
  describe service('mysql') do
    it { should be_enabled }
    it { should be_running }
  end

  describe port(3306) do
    it { should be_listening }
  end

  describe file('/etc/mysql/my.cnf') do
    it { should be_file }
  end

  describe command("mysqlshow -uroot -p#{$node['mysql']['server_root_password']}") do
    its(:stdout) { should match /Databases/ }
  end

  describe command("mysqlshow -u#{$node['mysql']['app']['username']} -p#{$node['mysql']['app']['password']}") do
    its(:stdout) { should match /Databases/ }
  end
end