name             'app'
maintainer       'YOUR_NAME'
maintainer_email 'YOUR_EMAIL'
license          'All rights reserved'
description      'e'
long_description IO.read(File.join(File.dirname(__FILE__), 'README.md'))
version          '0.1.0'

depends 'apt', '~> 2.6.0'
depends 'curl', '~> 2.0.0'
depends 'apache2', '~> 2.0.0'
depends 'mysql', '~> 5.5.4'