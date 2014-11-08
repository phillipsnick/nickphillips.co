# nickphillips.co

Source for nickphillips.co blog and portfolio website.

Includes full development VM environment provisioning with [Vagrant](https://www.vagrantup.com/) and 
[Chef](https://www.getchef.com/). Tested with [Test Kitchen](https://github.com/test-kitchen/test-kitchen). 
Server side application built in PHP using Symfony2 and Doctrine 2 using a mySQL database.
Frontend built using AngularJS and Bootstrap (LESS).

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
* [MailCatcher](http://mailcatcher.me/)
* [phpMyAdmin](http://www.phpmyadmin.net/home_page/index.php)
* [Composer](https://getcomposer.org/)
* [Bower](http://bower.io/)


### Application

* [Symfony2](http://symfony.com/)
* [Doctrine](http://www.doctrine-project.org/)
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
* You have [VirtualBox](https://www.virtualbox.org/) or VMware [fusion](http://www.vmware.com/uk/products/fusion)/[workstation](http://www.vmware.com/uk/products/workstation) (recommended for performance reasons) installed
* You have git installed
* You have [Ruby installed](https://www.ruby-lang.org/en/installation/)


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
|VirtualBox|18m15s|1345ms|961ms|
|Parallels|8m45s|1368ms|69ms|
|VMware Fusion|8m13s|416ms|32ms|

Understandably these are not the most reliable tests as these are just out of the box speeds, was more curiosity than 
anything else!


#### Vagrant

Either install Vagrant by downloading the appropriate installer from [their website](https://www.vagrantup.com/downloads.html).

Or if you use OS X you can use [homebrew cask](https://github.com/caskroom/homebrew-cask).

```bash
brew install caskroom/cask/brew-cask
brew cask install vagrant
```

#### Vagrant configuration

We require a few Vagrant plugins to get the VM provisioned.

* `vagrant-omnibus` - Ensure the required version of Chef is installed on the VM
* `vagrant-berkshelf` - Chef cookbook management

```bash
vagrant plugin install vagrant-omnibus vagrant-berkshelf
```

#### Test Kitchen 

If you wish to run the provisioning test suite, Test Kitchen will need installing.

Install Test Kitchen

```bash
gem install test-kitchen
```

Check the kitchen command is available.

```bash
kitchen version
```

Install kitchen vagrant driver

```
gem install kitchen-vagrant
```


## Bookmarks

### The project

(http://192.168.100.10)

### MailCatcher

(http://192.168.100.10:1080)

### phpMyAdmin

http://192.168.100.10:1090

notes: add details?

## Tests

## Versioning

Aim to adhere to [Semantic Versioning 2.0.0](http://semver.org/).

## Licence

[The MIT License (MIT)](https://github.com/phillipsnick/nickphillips.co/blob/master/LICENSE)