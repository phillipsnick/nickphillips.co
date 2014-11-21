<?php

namespace App\DefaultBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    public function indexAction()
    {
        $name = 'WOW';
        return $this->render('AppDefaultBundle:Default:index.html.twig', array('name' => $name));
    }

    public function noscriptAction(Request $request)
    {
        $this->get('session')->set('noscript', true);
        return $this->redirect($request->headers->get('referer'));
    }
}
