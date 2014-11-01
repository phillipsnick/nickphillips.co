name             'app'
maintainer       'YOUR_NAME'
maintainer_email 'YOUR_EMAIL'
license          'All rights reserved'
description      'e'
long_description IO.read(File.join(File.dirname(__FILE__), 'README.md'))
version          '0.1.0'

supports "ubuntu", "~> 14.04.0"

depends 'apt', '~> 2.6.0'
depends 'curl', '~> 2.0.0'
depends 'php', '~> 1.5.0'
depends 'php-fpm', '~> 0.7.0'
depends 'apache2', '~> 2.0.0'
depends 'mysql', '~> 5.5.4'
depends 'database', '~> 2.3.0'
depends 'memcached', '~> 1.7.2'
depends 'MailCatcher'
depends 'git', '~> 4.0.2'
depends 'composer', '~> 1.0.6'
depends 'phpunit', '~> 1.0.2'
depends 'nodejs', '~> 2.2.0'