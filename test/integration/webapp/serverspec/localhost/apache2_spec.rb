# Ideas taken from https://github.com/viverae-cookbooks/apache2/blob/master/test/integration/default/serverspec/localhost/default_spec.rb

require 'spec_helper'

describe 'apache2' do
  it 'should be installed' do
    expect(package('apache2')).to be_installed
  end

  it 'should be enabled and running' do
    expect(service 'apache2').to be_enabled
    expect(service 'apache2').to be_running
  end

  it 'should be listening on port 80' do
    expect(port 80).to be_listening
  end
end
