<?php

namespace App\DefaultBundle\Entity;

use FOS\UserBundle\Entity\User as BaseUser;
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

    public function setEmail($email)
    {
        if (is_null($this->getUsername())) {
            $this->setUsername(uniqid());
        }

        return parent::setEmail($email);
    }
}