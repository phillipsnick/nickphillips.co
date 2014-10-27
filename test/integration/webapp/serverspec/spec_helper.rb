require 'serverspec'
require 'json'
require 'pathname'

set :backend, :exec

$node = ::JSON.parse(File.read('/tmp/serverspec/node.json'))