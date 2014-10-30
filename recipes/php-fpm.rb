include_recipe 'php-fpm'

php_fpm_pool "www" do
  listen "127.0.0.1:9000"
end

package "php5-mysql"
package "php5-mcrypt"
package "php5-memcached"
package "php5-xdebug"