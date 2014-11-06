<?php

namespace App\DefaultBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        $name = 'WOW';
        return $this->render('AppDefaultBundle:Default:index.html.twig', array('name' => $name));
    }
}
