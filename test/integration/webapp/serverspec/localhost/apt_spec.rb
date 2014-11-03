require 'spec_helper'

describe 'apt' do
  # This does not work as serverspec executes the following command
  #  find /etc/apt/ -name *.list | xargs grep -o "^deb +http://ppa.launchpad.net/ondrej/php5-5.6
  # But unless *.list is placed within quotes it will not search within the sources.list.d directory
  #describe ppa('ondrej/php5-5.6') do
  #  it { should exist }
  #end
  describe file('/etc/apt/sources.list.d/php56.list') do
    it { should be_file }
    it { should contain 'deb     http://ppa.launchpad.net/ondrej/php5-5.6/ubuntu trusty main' }
  end
end