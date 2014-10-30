require 'spec_helper'

describe 'php-fpm' do
  describe package('php5-fpm') do
    it { should be_installed }
  end

  describe service('php5-fpm') do
    it { should be_enabled }
    it { should be_running }
  end

  describe port(9000) do
    it { should be_listening }
  end

  describe command('php -m') do
    its(:stdout) { should match /memcached/ }
    its(:stdout) { should match /mysql/ }
    its(:stdout) { should match /pdo_mysql/ }
    its(:stdout) { should match /Xdebug/ }
    its(:stdout) { should match /mcrypt/ }
  end
end