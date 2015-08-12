<?php
/*
Plugin Name: Simple History Cards
Plugin URI: https://github.com/urre/simple-history-cards
Description: Card based layout for Simple History
Version: 1.0.1
Author: Urban Sanden
Author URI: http://urre.me
Author Email: hej@urre.me
License: GPL2
*/

/*  Copyright 2015 Urban Sanden (email: hej@urre.me)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

class SHC {

    function __construct() {

        # Register admin styles and scripts
        add_action( 'admin_print_styles', array( $this, 'register_admin_styles' ) );
        add_action( 'admin_enqueue_scripts', array( $this, 'register_admin_scripts' ) );

    }

    public function register_admin_styles() {
        if (is_admin()) {
            wp_enqueue_style( 'simple-history-cards-plugin-styles', plugins_url( 'simple-history-cards/css/simple-history-cards.admin.css' ),'', '', 'screen and (min-width: 768px)' );
        }
    }

    public function register_admin_scripts() {

        wp_enqueue_script( 'simple-history-cards-admin-script', plugins_url( 'simple-history-cards/js/simple-history-cards.admin.js' ), array('jquery') );

    }

}

$shl = new SHC();