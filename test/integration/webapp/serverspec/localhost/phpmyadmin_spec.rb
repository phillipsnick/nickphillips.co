require 'spec_helper'

describe 'phpMyAdmin' do
  describe file('/opt/phpmyadmin') do
    it { should be_directory }
  end

  describe file('/opt/phpmyadmin/conf.d/root.inc.php') do
    it { should be_file }
    it { should contain "$cfg['Servers'][$i]['host'] = '#{$node['mysql']['app']['host']}'" }
    it { should contain "$cfg['Servers'][$i]['user'] = 'root" }
    it { should contain "$cfg['Servers'][$i]['password'] = '#{$node['mysql']['server_root_password']}'" }
  end

  describe port($node['phpmyadmin']['port']) do
    it { should be_listening }
  end

  describe file("/etc/apache2/sites-enabled/phpmyadmin.conf") do
    it { should be_file }
  end
end