<?php

namespace App\DefaultBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        $this->get('session')->getFlashBag()->add(
            'success',
            'This is a success message!'
        );
        $name = 'WOW';
        return $this->render('AppDefaultBundle:Default:index.html.twig', array('name' => $name));
    }
}
