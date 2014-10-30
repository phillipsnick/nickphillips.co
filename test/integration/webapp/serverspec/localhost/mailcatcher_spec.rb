require 'spec_helper'

describe 'mailcatcher' do
  describe port($node['mailcatcher']['smtp-port']) do
    it { should be_listening }
  end

  describe port($node['mailcatcher']['http-port']) do
    it { should be_listening }
  end
end