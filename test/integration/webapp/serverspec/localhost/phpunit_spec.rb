require 'spec_helper'

describe 'PHPUnit' do
  describe command('phpunit --version') do
    # I don't really care which version of this is installed as long as it's the latest!
    # This is also a terrible test!
    its(:stdout) { should match /by Sebastian Bergmann/ }
  end
end