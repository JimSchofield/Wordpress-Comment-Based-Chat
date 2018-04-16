<?php
/**
 * Plugin bootstrap file.
 *
 * @package           WordPress_Comment_Based_Chat
 *
 * @wordpress-plugin
 * Plugin Name:       WordPress Comment Based Chat
 * Plugin URI:        https://github.com/JimSchofield/Wordpress-Comment-Based-Chat
 * Description:       Adds React JS / REST API / WP_Comments powered chatroom capabilities.
 * Version:           1.0.0
 * Author:            Jim Schofield, Richard Aber
 * Author URI:        https://github.com/JimSchofield/Wordpress-Comment-Based-Chat
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       wpcbc
 * Domain Path:       /languages
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * The plugin version.
 *
 * This should match the version string in the plugin bootstrap header!
 * If you update one, update the other!
 *
 * @var string WPCBC_VERSION
 */
define( 'WPCBC_VERSION', '1.0.0' );

/**
 * The name ("slug") of this plugin.
 *
 * @var string WPCBC_NAME
 */
define( 'WPCBC_NAME', 'wpcbc-chatroom' );

/**
 * The full path and filename of this bootstrap file with symlinks resolved.
 *
 * @var string WPCBC_BOOTSTRAP_FILE
 */
define( 'WPCBC_BOOTSTRAP_FILE', __FILE__ );

/**
 * The full path to the parent directory of this bootstrap file with symlinks resolved, with trailing slash.
 *
 * @var string WPCBC_DIR
 */
define( 'WPCBC_DIR', dirname( WPCBC_BOOTSTRAP_FILE ) . '/' );

/**
 * The relative path to this plugin directory, from WP_PLUGIN_DIR, with trailing slash.
 *
 * @var string WPCBC_REL_DIR
 */
define( 'WPCBC_REL_DIR', basename( WPCBC_DIR ) . '/' );

/**
 * The URL of the plugin directory, with trailing slash.
 *
 * Example: https://example.local/wp-content/plugins/hcmc-custom-objects/
 *
 * @const string WPCBC_URL
 */
define( 'WPCBC_URL', plugins_url( '/', WPCBC_BOOTSTRAP_FILE ) );

/**
 * We're not using an autoloader (yet) so we'll just manually include our main class file.
 */
include( WPCBC_DIR . 'classes/class-wpcbc-chatroom.php' );

/**
 * Instantiate the WPCBC_Chatroom class.
 */
$wpcbc_chatroom = new WPCBC_Chatroom();
