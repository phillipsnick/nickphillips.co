require 'spec_helper'

describe 'nodejs' do
  describe package('nodejs') do
    it { should be_installed }
  end

  # Just double check npm was installed too
  describe command('npm') do
    its(:stdout) { should match /Usage: npm/ }
  end
end