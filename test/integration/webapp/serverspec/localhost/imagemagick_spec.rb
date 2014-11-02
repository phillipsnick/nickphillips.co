require 'spec_helper'

describe 'imagemagick' do
  describe package('imagemagick') do
    it { should be_installed }
  end
end