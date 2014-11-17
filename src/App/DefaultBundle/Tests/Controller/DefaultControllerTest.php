<?php

namespace App\DefaultBundle\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class DefaultControllerTest extends WebTestCase
{
    public function testIndex()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/');

        $this->assertTrue($crawler->filter('html:contains("Hello")')->count() > 0);
    }

    public function testNoscriptDismiss()
    {
        $javascriptMissingStr = 'html:contains("JavaScript is required for this website to function")';
        $client = static::createClient();

        $crawler = $client->request('GET', '/');
        $this->assertTrue($crawler->filter($javascriptMissingStr)->count() > 0);

        $client->request('GET', '/noscript/hide');

        $this->assertTrue($client->getResponse()->isRedirect());
        $this->assertTrue($client->getRequest()->getSession()->get('noscript'));

        $crawler = $client->request('GET', '/');
        $this->assertTrue($crawler->filter($javascriptMissingStr)->count() === 0);
    }
}
