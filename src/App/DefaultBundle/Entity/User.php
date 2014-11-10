<?php

namespace App\DefaultBundle\Entity;

use Sonata\UserBundle\Entity\BaseUser as BaseUser;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="user")
 */
class User extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\Column(type="json")
     */
    protected $groups;


    public function setEmail($email)
    {
        if (is_null($this->getUsername())) {
            $this->setUsername(uniqid());
        }

        return parent::setEmail($email);
    }
}