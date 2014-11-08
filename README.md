# nickphillips.co

Source for nickphillips.co blog and portfolio website.

Includes full development VM environment provisioning with [Vagrant](https://www.vagrantup.com/) and [Chef](https://www.getchef.com/). Tested with [Test Kitchen](https://github.com/test-kitchen/test-kitchen). 
Server side application built in PHP using Symfony2 and Doctrine 2 using a mySQL database.
Frontend built using AngularJS and Bootstrap (LESS).

__STATUS:__ huge work in progress currently ;)


## Development Environment

### Getting Started

This whole project has been designed to built and run from within the Ubuntu VM created by Vagrant/Chef. Allowing for the
whole development environment to be easily setup on new workstations with a few commands. Unfortunately to keep 
performance of the application as efficient as possible we use NFS for the sharing of files with the guest VM 
(also due to shared folders not working with VMware/Ubuntu [Vagrant issue #4362](https://github.com/mitchellh/vagrant/issues/4362)).
Due to this it's unlikely that this package will work on Windows based hosts.

#### Prerequisites

* Your workstation is running OS X or *nix based operating system
* You have [VirtualBox](https://www.virtualbox.org/) or VMware [fusion](http://www.vmware.com/uk/products/fusion)/[workstation](http://www.vmware.com/uk/products/workstation) (recommended for performance reasons) installed
* You have [Ruby installed](https://www.ruby-lang.org/en/installation/)

#### Vagrant

Either install Vagrant by downloading the appropriate installer from [their website](https://www.vagrantup.com/downloads.html).

Or use [homebrew cask](https://github.com/caskroom/homebrew-cask).

```bash
brew install caskroom/cask/brew-cask
brew cask install vagrant
```

#### Vagrant configuration

notes: Vagrant, virtual box?

WIP 
Install Test Kitchen

```gem install test-kitchen```

Check the kitchen command is available.

```kitchen version```

Install kitchen vagrant driver

```gem install kitchen-vagrant```

??
vagrant plugin install vagrant-omnibus



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