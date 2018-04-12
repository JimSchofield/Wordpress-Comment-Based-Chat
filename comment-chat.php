<?php
/**
 * Plugin Name: Comment chat POC
 * Version: 1.0.0
 * Author: Jim Schofield
 *
 * @package comment-chat
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function comment_chat_scripts() {
    wp_enqueue_script('comment-chat', plugin_dir_url( __FILE__ ) . '/build/chat.js', array( 'react', 'react-dom' ));
}

add_action( 'wp_enqueue_scripts', 'comment_chat_scripts' );