source "https://supermarket.getchef.com"

metadata

cookbook 'ls-dev', path: 'chef/cookbooks/ls-dev'
cookbook 'MailCatcher', :github => 'bryantebeek/chef-mailcatcher'

group :integration do
  cookbook 'test-helper', path: 'test/fixtures/cookbooks/test-helper'
end