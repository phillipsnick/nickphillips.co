<?php

namespace App\UserBundle\Tests\DependencyInjection;

use Symfony\Component\DependencyInjection\ContainerBuilder;
use App\UserBundle\DependencyInjection\AppUserExtension;

class AppUserExtensionTest extends \PHPUnit_Framework_TestCase
{
    protected $configuration;

    public function testConfigLoaded()
    {
        $this->createFullConfiguration();
        $this->assertParameter('App\UserBundle\Admin\UserAdmin', 'sonata.user.admin.user.class');
    }

    protected function createFullConfiguration()
    {
        $this->configuration = new ContainerBuilder();
        $loader = new AppUserExtension();
        $loader->load(array(null), $this->configuration);

        $this->assertTrue($this->configuration instanceof ContainerBuilder);
    }

    /**
     * @param mixed  $value
     * @param string $key
     */
    private function assertParameter($value, $key)
    {
        $this->assertEquals($value, $this->configuration->getParameter($key), sprintf('%s parameter is correct', $key));
    }
}
