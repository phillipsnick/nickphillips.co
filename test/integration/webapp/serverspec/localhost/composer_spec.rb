require 'spec_helper'

describe 'composer' do
  describe command('composer --version') do
    # I don't really care which version of this is installed as long as it's the latest!
    its(:stdout) { should match /Composer version/ }
  end
end