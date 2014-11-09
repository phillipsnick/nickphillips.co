<?php

namespace App\DefaultBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use App\DefaultBundle\Entity\User;

class UserData implements FixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $user = new User();
        $user
            ->setEmail('nick@linkstudios.co.uk')
            ->setPassword('nick');

        $manager->persist($user);
        $manager->flush();
    }
}