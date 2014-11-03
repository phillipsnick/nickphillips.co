require 'spec_helper'

describe 'php' do
  describe package('php5-cli') do
    it { should be_installed }
  end

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
    its(:stdout) { should match /imagick/ }
  end

  describe file('/etc/php5/fpm/pool.d/www.conf') do
    it { should contain 'php_value[date.timezone] = Europe/London' }
  end

  # Check date.timezone is set for php5-cli
  describe command('php -i') do
    its(:stdout) { should match /Europe\/London/ }
  end
end