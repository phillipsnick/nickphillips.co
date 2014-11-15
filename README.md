# nickphillips.co

Source for nickphillips.co blog and portfolio website.

Includes full development VM environment provisioning with [Vagrant](https://www.vagrantup.com/) and 
[Chef](https://www.getchef.com/). Tested with [Test Kitchen](https://github.com/test-kitchen/test-kitchen). 
Server side application built in PHP using [Symfony2](http://symfony.com/) and [Doctrine 2](http://www.doctrine-project.org/) using a mySQL database.
Frontend built using [AngularJS](https://angularjs.org/) and [Bootstrap](http://getbootstrap.com) (LESS).

__STATUS:__ huge work in progress currently ;)


## Software and Libraries

Breakdown of all the software and libraries used for this project. 

### Server packages

* [Ubuntu 14.04 x64](http://www.ubuntu.com/server)
* [Apache 2.4](http://httpd.apache.org/)
* [mySQL 5.5](http://www.mysql.com/products/community/)
* [PHP 5.6](http://php.net/) / [PHP-FPM](http://php-fpm.org/)
* [Memcached](http://memcached.org/)
* [NodeJS](http://nodejs.org/)
* [ImageMagick](http://www.imagemagick.org/)


### Tools

* [Vagrant](https://www.vagrantup.com/)
* [Chef](https://www.getchef.com/)
  * [Test Kitchen](http://kitchen.ci/)
  * [Berkshelf](http://berkshelf.com/)
* [Grunt](http://gruntjs.com/)
  * [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks)
  * [grunt-update-json](https://github.com/AndreasPizsa/grunt-update-json)
  * [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
  * [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
  * [grunt-bower-task](https://github.com/yatskevich/grunt-bower-task)
  * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
  * [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)
  * [grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less)
  * [grunt-lesslint](https://github.com/jgable/grunt-lesslint)
  * [grunt-phpcs](https://github.com/SaschaGalley/grunt-phpcs)
  * [grunt-phplint](https://github.com/jgable/grunt-phplint)
* [MailCatcher](http://mailcatcher.me/)
* [phpMyAdmin](http://www.phpmyadmin.net/home_page/index.php)
* [Composer](https://getcomposer.org/)
* [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer)
* [Bower](http://bower.io/)


### Application

* [Symfony2](http://symfony.com/)
* [Doctrine](http://www.doctrine-project.org/)
* [Sonata Admin](http://sonata-project.org/)
* [FOSUserBundle](https://github.com/FriendsOfSymfony/FOSUserBundle/)
* [Twig](http://twig.sensiolabs.org/)


### Front end

* [AngualarJS](https://angularjs.org/)
* [Bootstrap](http://getbootstrap.com/)


## Development Environment

### Getting Started

This whole project has been designed to built and run from within the Ubuntu VM created by Vagrant/Chef. Allowing for the
whole development environment to be easily setup on new workstations with a few commands. 

To keep performance of the application as efficient as possible we use NFS for the sharing of files with the guest VM 
(also due to shared folders not working with VMware/Ubuntu [Vagrant issue #4362](https://github.com/mitchellh/vagrant/issues/4362)).
Unfortunately due to this it's unlikely that this package will work on Windows hosts.


#### Prerequisites

* Your workstation is running OS X or *nix based operating system
* You know how to use the command line
* You have [VirtualBox](https://www.virtualbox.org/) or VMware [Fusion](http://www.vmware.com/uk/products/fusion)/[Workstation](http://www.vmware.com/uk/products/workstation) (recommended for performance) installed
* You have git installed
* You have [Ruby installed](https://www.ruby-lang.org/en/installation/)


#### Chef Development kit

Download and install the appropriate installer from [their website](https://downloads.getchef.com/chef-dk/)

Or if you use OS X you can use [homebrew cask](https://github.com/caskroom/homebrew-cask).

```bash
brew install caskroom/cask/brew-cask
brew cask install chefdk
```

#### Vagrant

Either install Vagrant by downloading the appropriate installer from [their website](https://www.vagrantup.com/downloads.html).

Or if you use OS X you can use [homebrew cask](https://github.com/caskroom/homebrew-cask).

```bash
brew install caskroom/cask/brew-cask
brew cask install vagrant
```

#### Vagrant configuration

By default VirtualBox is the default provider, if you are using another provider please see
[Vagrant docs](https://docs.vagrantup.com/v2/providers/default.html).

We require a few Vagrant plugins to get the VM provisioned.

* `vagrant-omnibus` - Ensure the required version of Chef is installed on the VM
* `vagrant-berkshelf` - Chef cookbook management

```bash
vagrant plugin install vagrant-omnibus vagrant-berkshelf
```

__Optional Berkshelf modifications__

When using the vagrant-berkshelf plugin, there is a known issue where the Berkshelf NFS share is unmounted after provisioning,
this prevents you from running the `vagrant provision` command.

A known work around is to simply reboot the machine and provision it after booting using `vagrant reload --provision`.

If making alterations to the Chef cookbooks/recipes this becomes a little tedious, a possible hack can be found under
[#41](https://github.com/phillipsnick/nickphillips.co/issues/41).


#### Test Kitchen 

If you wish to run the provisioning test suite, Test Kitchen will need installing.

Install Test Kitchen and the vagrant driver

```bash
gem install test-kitchen kitchen-vagrant
```

Check the kitchen command is available.

```bash
kitchen version
```

Please see the [tests section](##Tests) below for running the test suite.


#### Starting the VM

__TODO:__ do  we need `berks install` ??

Now all the software packages are installed on the host machine you can now start the VM using Vagrant.

```bash
vagrant up
```

*Note that it may ask for administrator privileges due to the NFS shared folders*

Now might be a good time to make a coffee or two ;)


## Development

### Keeping JSON files in sync

In this repository we have three JSON files which contain some identical meta data fields.
* `composer.json` - PHP package manager definitions
* `package.json` - NodeJS/NPM package manager
* `bower.json` - Front end package manager

Each of these files contain one or more of the following fields which contain identical information:
* `name` - Project name
* `description` - Project description
* `license` - License information
* `version` - Current version
* `homepage` - Homepage URL

To make life a little easier updating this information, the above fields should only ever be edited in composer.json.

Then the grunt task for syncing JSON files should be run:

```bash
grunt update_json
```

More details on this task can be found on the [grunt-update-json](https://github.com/AndreasPizsa/grunt-update-json) page
and inside the gruntfile.js inside this repository.


## Bookmarks

### The project

(http://192.168.100.10)

### MailCatcher

(http://192.168.100.10:1080)

### phpMyAdmin

http://192.168.100.10:1090

notes: add details?

## Tests

### PHPUnit

Login to the Vagrant VM and navigate to the apps root folder.

```bash
vagrant ssh
cd /vagrant
```

Run PHPUnit's suite

```bash
phpunit -c app/
```


### Test Kitchen

### JS?

## Notes


### Virtual Machine Providers

Vagrant supports a number of different [providers](https://docs.vagrantup.com/v2/providers/). While the majority of the 
development community opts for the free option [VirtualBox](https://www.virtualbox.org/), I personally use VMware Fusion 
even though it might be one of the more expensive options considering you also need a 
[Vagrant licence](https://www.vagrantup.com/vmware). It has proved to be very reliable over the years and some the fact
some of my servers run ESXi helped sway my decision.

Early on in this projects development I ran some extremely basic benchmarks against VirtualBox, VMware Fusion and 
Parallels Desktop. In this test I ran the provisioning three times with all package caching disabled and picked the 
fastest time for the below results.

Also tested Symfony2 page speed (readout from development toolbar) on a fairly simple page with a few templates and 
no database queries, without pre-warming the cache. Then recorded the first time and the fastest time of 4 refreshes. 

|Provider|Provisioning Time|First Page Load|Fastest Page Load|
|---|---|---|---|
|VirtualBox|18m15s|1345ms|961ms|
|Parallels|8m45s|1368ms|69ms|
|VMware Fusion|8m13s|416ms|32ms|

Understandably these are not the most reliable tests as these are just out of the box configurations, was more 
curiosity than anything else!


## Versioning

Aim to adhere to [Semantic Versioning 2.0.0](http://semver.org/).

## Licence

[The MIT License (MIT)](https://github.com/phillipsnick/nickphillips.co/blob/master/LICENSE)