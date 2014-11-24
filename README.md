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
  * [grunt-bump](https://github.com/vojtajina/grunt-bump)
  * [grunt-update-json](https://github.com/AndreasPizsa/grunt-update-json)
  * [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
  * [grunt-shell](https://github.com/sindresorhus/grunt-shell)
  * [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
  * [grunt-bower-task](https://github.com/yatskevich/grunt-bower-task)
  * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
  * [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)
  * [grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less)
  * [grunt-lesslint](https://github.com/jgable/grunt-lesslint)
  * [grunt-phpcs](https://github.com/SaschaGalley/grunt-phpcs)
  * [grunt-phplint](https://github.com/jgable/grunt-phplint)
  * [grunt-karma](https://github.com/karma-runner/grunt-karma)
  * [grunt-angular-templates](https://github.com/ericclemmons/grunt-angular-templates)
* [MailCatcher](http://mailcatcher.me/)
* [phpMyAdmin](http://www.phpmyadmin.net/home_page/index.php)
* [Composer](https://getcomposer.org/)
* [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer)
* [PHPUnit](https://phpunit.de/)
* [Bower](http://bower.io/)
* [Jasmine](http://jasmine.github.io/)
* [Karma](karma-runner.github.io)
* [PhantomJS](http://phantomjs.org/)


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
* `vagrant-hostmanager` - Updates /etc/hosts file automatically

```bash
vagrant plugin install vagrant-omnibus vagrant-berkshelf vagrant-hostmanager
```


#### Test Kitchen 

If you wish to run the provisioning test suite, Test Kitchen will need installing.

Install Test Kitchen and the vagrant driver

```bash
bundle install
```

Please see the [test-kitchen tests section](#### Test Kitchen) below for details on running the test suite.


#### Custom Settings

If you need to customise any of the settings such as:
* VM CPUs
* VM Memory
* VM IP address
* VM Hostname

Or if you would like to make use of git from within the VM, it's possible to define the name and email used by git.

To make any of these changes simply copy the dist file from `chef/config/` and alter the parameters accordingly.

```bash
cp chef/config/dev.json.dist chef/config/dev.json
```


#### Starting the VM

__TODO:__ do  we need `berks install` ??

Now all the software packages are installed on the host machine you can now start the VM using Vagrant.

```bash
vagrant up
```

*Note that it may ask for administrator privileges due to the NFS shared folders*

Now might be a good time to make a coffee or two ;)


## Development Workflow

All commands below must be run from within the VM created with Vagrant. To login to the VM and navigate to the projects root:

```bash
vagrant ssh
cd /vagrant
```

### Bookmarks

__TODO:__ IP config? More details?

#### The project

http://nickphillips.dev or http://192.168.15.10


#### MailCatcher

http://nickphillips.dev:1080 or http://192.168.15.10:1080


#### phpMyAdmin

http://nickphillips.dev:1090 or http://192.168.15.10:1090


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


### Testing

You can run all tests using Grunt, there is a command setup to run the following:
* PHP_CodeSniffer
* PHP Linting
* JavaScript Linting
* Less Linting

__TODO:__ Still to integrate
* PHPUnit
* JavaScript Tests

To run this command:

```bash
grunt test
```

It's also possible to run each command individually.

#### PHPUnit

Run PHPUnit's suite

```bash
phpunit -c app/
```

It's also possible to run tests on a single bundle.

```bash
phpunit -c app/ src/App/DefaultBundle
```

__TODO:__ Grunt phpunit?


#### Test Kitchen

__TODO:__ Test kitchen is broken!


#### JavaScript

All tests are written to be run with [Jasmine](http://jasmine.github.io/), using [Karma](karma-runner.github.io)
and [PhantomJS](http://phantomjs.org/).

To run the tests either run karam via Grunt (recommended)

```bash
grunt karma
```

Or use karma directly.

```bash
karma start tests/js/karma.config.js
```


### Features

#### Feature Branch

1. Create a feature branch `git checkout -b featureX`
2. Commit the changes `git commit -am 'Some amazing changes'`
3. Push the branch `git push origin featureX`


#### Merging

As I'm not the biggest fan of the whole GitHub pull request workflow I tend to just merge branches in locally and push up.
By doing this it gives greater control over bumping versions and releasing correctly.

Typical workflow:

1. Merge branch `git merge featureX --no-ff`
2. Bump the version accordingly as mentioned below
3. Push the changes up `git push origin master`
4. Delete the branch locally `git branch -d featureX`
5. Delete the branch from GitHub `git push origin :featureX`


### Releases

In an attempt to streamline the whole release process I have chosen to implement [grunt-bump](https://github.com/vojtajina/grunt-bump)
specifically for this.

This automatically updates the version number inside composer.json and package.json, creates the git tag. But pushing to GitHub
has been disabled and this must be done manually.

More commands can be found within the repository [grunt-bump](https://github.com/vojtajina/grunt-bump). But the main ones
have been listed below.


#### Patch Release

```bash
grunt bump
```

Or

```bash
grunt bump:patch
```


#### Minor Release

```bash
grunt bump:minor
```


#### Major Release

```bash
grunt bump:major
```


#### Pushing Releases

Either push all tags up

```bash
git push --tags
```

Or only push a specific tag

```bash
git push origin v0.0.1
```


## Application

### Flash Messages

In order to tie the [flash messages](http://symfony.com/doc/current/book/controller.html#flash-messages) provided by Symfony
in with the Bootstrap styling, it's possible to quickly and easily use the 4 default styles included with Bootstrap.

Possible types include:
* `success`
* `info`
* `warning`
* `error` - This is converted into `danger` within the view

__Example__

Displaying a success message from within a controller action.

```php
$this->get('session')->getFlashBag()->add(
    'success',
    'This is a success message!'
);
```


#### AngularJS Flash Messages

It's possibly to easily add flash messages to other controllers and services using the `AppAlertService`.

The below example shows how to inject into a controller.

```js
app.controller('ControllerNameCtrl', ['$scope', 'AppAlertService', function($scope, AppAlertService) {
  $scope.testButton = function() {
    AppAlertService.add('success', 'Woo we created a success message');
  }
}]);
```


#### AngularJS Partials

To help reduce the number of AJAX requests for fetching partials they are all preloaded into the main JavaScript file
and setup into AngularJS' `$templateCache`. The Grunt file has been setup to pick up all partials within the public
directory within a bundle, for example:

```
src/App/DefaultBundle/Resources/public/partials/my-example-partial.html
```

Grunt watch has been setup to watch for changes to partials and automatically regenerate the cache, but if you wish to
run this manually, use the command below to generate the cache and update all the JavaScript files.

```bash
grunt js
```


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