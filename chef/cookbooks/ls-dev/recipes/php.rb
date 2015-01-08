include_recipe 'php'
include_recipe 'php-fpm'

php_fpm_pool "www" do
  listen "127.0.0.1:9000"
  php_options 'php_value[date.timezone]' => 'Europe/London'
end

package "php5-pgsql"
package "php5-mcrypt"
package "php5-memcached"
package "php5-xdebug"
package "php5-imagick"