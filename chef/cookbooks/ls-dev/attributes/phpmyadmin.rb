default['phpmyadmin']['user']          = 'phpmyadmin'
default['phpmyadmin']['group']         = 'vagrant'
# Although we use PHP-FPM, the cookbook uses php_fpm which isn't supported in our chosen PHP-FPM cookbook
# so we manage this manually with a template
default['phpmyadmin']['fpm']           = false
default['phpmyadmin']['port']          = 1090