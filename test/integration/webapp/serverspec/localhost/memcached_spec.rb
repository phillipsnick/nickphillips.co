require 'spec_helper'

describe 'memcached server' do
  describe service('memcached') do
    it { should be_enabled }
    it { should be_running }
  end

  describe port($node['memcached']['port']) do
    it { should be_listening }
  end
end