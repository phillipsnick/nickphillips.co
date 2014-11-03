require 'spec_helper'

describe 'mailcatcher' do
  describe port($node['mailcatcher']['smtp-port']) do
    it { should be_listening }
  end

  describe port($node['mailcatcher']['http-port']) do
    it { should be_listening }
  end

  describe process('mailcatcher') do
    its(:args) { should match /http-ip #{$node['mailcatcher']['http-ip']}/ }
    its(:args) { should match /http-port #{$node['mailcatcher']['http-port']}/ }
    its(:args) { should match /smtp-ip #{$node['mailcatcher']['smtp-ip']}/ }
    its(:args) { should match /smtp-port #{$node['mailcatcher']['smtp-port']}/ }
  end
end