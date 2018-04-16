<?php
/**
 * WPCBC_Chatroom Class file.
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class WPCBC_Chatroom
 */
class WPCBC_Chatroom {

	/**
	 * The version of this plugin.
	 *
	 * @var string $version
	 */
	public $version = WPCBC_VERSION;

	/**
	 * The name ("slug") of this plugin.
	 *
	 * @var string $name
	 */
	public $name = WPCBC_NAME;

	/**
	 * The full path and filename of this plugin's bootstrap file with symlinks resolved.
	 *
	 * @var string $bootstrap_file
	 */
	public $bootstrap_file = WPCBC_BOOTSTRAP_FILE;

	/**
	 * The full path to parent directory of this plugin's bootstrap file with symlinks resolved, with trailing slash.
	 *
	 * @var string $dir
	 */
	public $dir = WPCBC_DIR;

	/**
	 * The relative path to this plugin's bootstrap directory, from WP_PLUGIN_DIR, with trailing slash.
	 *
	 * @var string $rel_dir
	 */
	public $rel_dir = WPCBC_REL_DIR;

	/**
	 * The URL to this plugin's bootstrap directory, with trailing slash.
	 *
	 * @var string $url
	 */
	public $url = WPCBC_URL;

	/**
	 * The post type for Chatrooms.
	 *
	 * @var string $post_type
	 */
	public $post_type = 'wpcbc-chatroom';

	/**
	 * The single chatroom template slug.
	 *
	 * @var string $template_slug
	 */
	public $template_slug = 'single-wpcbc-chatroom';

	/**
	 * The "handle" for our chatroom's JS App.
	 *
	 * @var string $js_app_handle
	 */
	public $js_app_handle = 'wpcbc-chatroom';

	/**
	 * The "handle" for our chatroom's JS data.
	 *
	 * @var string $js_app_data_handle
	 */
	public $js_app_data_handle = 'chatroomVars';

	/**
	 * Contains an instance of this class, if available.
	 *
	 * @var null|\WPCBC_Chatroom $_instance
	 */
	protected static $_instance = null;

	/**
	 * WPCBC_Chatroom constructor.
	 */
	public function __construct() {

		/**
		 * Register post types, flush rewrite rules, anything else that needs to happen on activation.
		 *
		 * @link https://developer.wordpress.org/reference/functions/register_activation_hook/
		 */
		register_activation_hook( $this->bootstrap_file, array( $this, 'activation_hook' ) );

		/**
		 * Flush rewrite rules, anything else that needs to happen on deactivation.
		 *
		 * @link https://developer.wordpress.org/reference/functions/register_deactivation_hook/
		 */
		register_deactivation_hook( $this->bootstrap_file, array( $this, 'deactivation_hook' ) );

		/**
		 * Initialization.
		 *
		 * @link https://developer.wordpress.org/reference/hooks/init/
		 */
		add_action( 'init', array( $this, 'init' ), 0 );

		/**
		 * Filter the default comment status.
		 *
		 * @link https://developer.wordpress.org/reference/hooks/get_default_comment_status/
		 */
		add_filter( 'get_default_comment_status', array( $this, 'default_comment_status' ), 10, 3 );

		/**
		 * Enqueue scripts and styles used by our plugin.
		 *
		 * @link https://developer.wordpress.org/reference/hooks/wp_enqueue_scripts/
		 */
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );

		/**
		 * Filter the single template.
		 *
		 * Hooked late in case there are other plugins playing with the single template filter. Let them run first.
		 *
		 * @link https://developer.wordpress.org/reference/hooks/type_template/
		 */
		add_filter( 'single_template', array( $this, 'single_template' ), 999, 3 );

		/**
		 * Filter the comment flood check.
		 *
		 * @link https://developer.wordpress.org/reference/hooks/wp_is_comment_flood/
		 */
		add_filter( 'wp_is_comment_flood', array( $this, 'is_comment_flood_filter' ), 10, 5 );
	}

	/**
	 * Get instance of this class.
	 *
	 * @return \WPCBC_Chatroom
	 */
	public static function get_instance() {

		if ( null !== self::$_instance ) {
			return self::$_instance;
		}

		self::$_instance = new self();

		return self::$_instance;
	}

	/**
	 * Register post type and flush rewrite rules on activation.
	 */
	public function activation_hook() {
		$this->register_post_types();
		flush_rewrite_rules();
	}

	/**
	 * Flush rewrite rules on deactivation.
	 */
	public function deactivation_hook() {
		flush_rewrite_rules();
	}

	/**
	 * Initialize plugin.
	 */
	public function init() {
		$this->load_plugin_textdomain();
		$this->register_post_types();
	}

	/**
	 * Load our text domain.
	 *
	 * @link https://developer.wordpress.org/reference/functions/load_plugin_textdomain/
	 */
	public function load_plugin_textdomain() {
		load_plugin_textdomain( 'wpcbc', false, $this->rel_dir . '/languages' );
	}

	/**
	 * Register custom post types.
	 *
	 * @link https://developer.wordpress.org/reference/functions/register_post_type/
	 */
	public function register_post_types() {

		register_post_type(
			$this->post_type,
			array(
				'labels'              => array(
					'name'               => _x( 'Chatrooms', 'post type general name', 'wpcbc' ),
					'singular_name'      => _x( 'Chatroom', 'post type singular name', 'wpcbc' ),
					'add_new'            => __( 'Add New', 'wpcbc' ),
					'add_new_item'       => __( 'Add New Chatroom', 'wpcbc' ),
					'edit_item'          => __( 'Edit Chatroom', 'wpcbc' ),
					'new_item'           => __( 'New Chatroom', 'wpcbc' ),
					'all_items'          => __( 'All Chatrooms', 'wpcbc' ),
					'view_item'          => __( 'View Chatroom', 'wpcbc' ),
					'search_items'       => __( 'Search Chatrooms', 'wpcbc' ),
					'not_found'          => __( 'No Chatrooms found', 'wpcbc' ),
					'not_found_in_trash' => __( 'No Chatrooms found in trash', 'wpcbc' ),
					'menu_name'          => __( 'Chatrooms', 'wpcbc' ),
				),
				'public'              => true,
				'exclude_from_search' => true,
				'publicly_queryable'  => true,
				'show_in_nav_menus'   => true,
				'show_ui'             => true,
				'show_in_menu'        => true,
				'query_var'           => true,
				'capability_type'     => 'post',
				'has_archive'         => false,
				'hierarchical'        => false,
				'menu_position'       => null,
				'menu_icon'           => 'dashicons-format-chat',
				'show_in_rest'        => true,
				'delete_with_user'    => false,
				'supports'            => array(
					'title',
					'author',
					'comments',
				),
			)
		);
	}

	/**
	 * By default, our chatroom should have comments enabled.
	 *
	 * @param string $status       Default status for the given post type, either 'open' or 'closed'.
	 * @param string $post_type    Post type. Default is `post`.
	 * @param string $comment_type Type of comment. Default is `comment`.
	 *
	 * @return string
	 */
	public function default_comment_status( $status, $post_type, $comment_type ) {

		if ( $this->post_type !== $post_type ) {
			return $status;
		}

		switch ( $comment_type ) {
			case 'pingback':
			case 'trackback':
				$status = 'closed';
				break;
			case 'comment':
				$status = 'open';
		}

		return $status;
	}

	/**
	 * Enqueue scripts and styles.
	 *
	 * This is too strict for use with other posts that maybe load the chatroom in a popup window or similar, would need to be expanded.
	 */
	public function enqueue_scripts() {

		/**
		 * Maybe register vendor scripts that are likely going to be in WP Core when Gutenberg merges.
		 */
		$this->maybe_register_vendor_scripts();

		/**
		 * Get the current WP_Post object.
		 *
		 * @var \WP_Post $post
		 */
		$post = get_post();

		/**
		 * Only for our post type.
		 */
		if ( empty( $post ) || $this->post_type !== $post->post_type ) {
			return;
		}

		/**
		 * Enqueue the chatroom JS.
		 */
		wp_enqueue_script(
			$this->js_app_handle,
			$this->url . 'build/chat.js',
			array(
				'wp-api',
				'react',
				'react-dom',
				'fetch',
			),
			$this->version
		);

		/**
		 * Setup array of data for use with JS.
		 *
		 * @var array $chatroom_vars
		 */
		$chatroom_vars = array(
			'chatroomID'   => $post->ID,
			'chatroomSlug' => $post->post_name,
		);

		if ( is_user_logged_in() ) {
			/**
			 * Get the current logged in WP_User object.
			 *
			 * @var \WP_User $current_user
			 */
			$current_user                     = wp_get_current_user();
			$chatroom_vars['userID']          = $current_user->ID;
			$chatroom_vars['userLogin']       = $current_user->user_login;
			$chatroom_vars['userDisplayName'] = $current_user->display_name;
			$chatroom_vars['userEmail']       = $current_user->user_email;
			$chatroom_vars['userUrl']         = $current_user->user_url;
			$chatroom_vars['userAgent']       = isset( $_SERVER['HTTP_USER_AGENT'] ) ? $_SERVER['HTTP_USER_AGENT'] : ''; // This may not be the best method, but this is what Core does for standard comments.
			$chatroom_vars['userIP']          = $_SERVER['REMOTE_ADDR']; // This may not be the best method, but this is what Core does for standard comments.
			$chatroom_vars['userAvatar']      = get_avatar_url( $current_user );
		}

		/**
		 * Add JS data for use in chatroom JS.
		 */
		wp_localize_script( $this->js_app_handle, $this->js_app_data_handle, $chatroom_vars );
	}

	/**
	 * Maybe register React and other "vendor" scripts that will likely end up in WP Core when Gutenberg merges.
	 *
	 * For now, if Gutenberg is not active, and the scripts aren't in Core,
	 * we'll register the ones that we might need,
	 * that were used in Gutenberg v 2.6.0 (stable Gutenberg release at time of writing).
	 * This shouldn't be necessary after WordPress 5.0.0.
	 *
	 * @link https://github.com/WordPress/gutenberg/blob/v2.6.0/lib/client-assets.php#L392
	 */
	public function maybe_register_vendor_scripts() {

		/**
		 * Minified / Uniminified prefixes for vendor scripts.
		 */
		$suffix        = SCRIPT_DEBUG ? '' : '.min';
		$react_suffix  = ( SCRIPT_DEBUG ? '.development' : '.production' ) . $suffix;
		$moment_script = SCRIPT_DEBUG ? 'moment.js' : 'min/moment.min.js';

		/**
		 * This is an array of "vendor scripts" that should be in WP Core when Gutenberg merges.
		 *
		 * @var array $vendor_scripts
		 */
		$vendor_scripts = array(
			'react'     => 'https://unpkg.com/react@16.3.0/umd/react' . $react_suffix . '.js',
			'react-dom' => 'https://unpkg.com/react-dom@16.3.0/umd/react-dom' . $react_suffix . '.js',
			'moment'    => 'https://unpkg.com/moment@2.21.0/' . $moment_script,
			'fetch'     => 'https://unpkg.com/whatwg-fetch/fetch.js',
			'promise'   => 'https://unpkg.com/promise-polyfill@7.0.0/dist/promise' . $suffix . '.js',
		);

		foreach ( $vendor_scripts as $handle => $src ) {
			if ( ! wp_script_is( $handle, 'registered' ) ) {
				wp_register_script(
					$handle,
					$src
				);
			}
		}
	}

	/**
	 * Load the single-chatroom.php template file.
	 *
	 * We allow themes and child themes to override this template by supplying their own.
	 * Have not tested with more specific variations such as single-wpcbc-chatroom-{slug}.php.
	 *
	 * @param string $template  Path to the template. See locate_template().
	 * @param string $type      Filename without extension (I think this is a Core Documentation misnomer).
	 *                          Possible values for $type include: ‘index’, ‘404’, ‘archive’, ‘author’, ‘category’,
	 *                          ‘tag’, ‘taxonomy’, ‘date’, ’embed’, ‘home’, ‘frontpage’, ‘page’, ‘paged’, ‘search’,
	 *                          ‘single’, ‘singular’, and ‘attachment’.
	 * @param array  $templates A list of template candidates, in descending order of priority.
	 *
	 * @return string
	 */
	public function single_template( $template, $type, $templates ) {

		/**
		 * Return early if our template is not in the array of template candidates. This isn't for us.
		 */
		if ( empty( $templates ) || ! in_array( $this->template_slug . '.php', $templates, true ) ) {
			return $template;
		}

		$contains = strpos( $template, $this->template_slug );

		/**
		 * Return early if our template's slug is not part of the template name. This isn't for us.
		 */
		if ( false !== $contains ) {
			return $template;
		}

		/**
		 * If we have the template file, return it.
		 */
		if ( file_exists( $this->dir . 'templates/' . $this->template_slug . '.php' ) ) {
			return $this->dir . 'templates/' . $this->template_slug . '.php';
		}

		return $template;
	}

	/**
	 * Filter the comment flood check.
	 *
	 * The Chatroom can look like a comment flood to Core.
	 * Technically, it actually is.
	 * But we want to allow multiple comments in rapid succession, or it wouldn't be much of a chatroom.
	 *
	 * @filter wp_is_comment_flood
	 *
	 * @param bool $is_flood               Is a comment flooding occurring? Default false.
	 * @param string $comment_author_ip    Comment author's IP address.
	 * @param string $comment_author_email Comment author's email.
	 * @param string $comment_date_gmt     GMT date the comment was posted.
	 * @param bool   $avoid_die            Whether to prevent executing wp_die()
	 *                                     or die() if a comment flood is occurring.
	 *
	 * @return bool
	 */
	public function is_comment_flood_filter( $is_flood, $comment_author_ip, $comment_author_email, $comment_date_gmt, $avoid_die ) {

		/**
		 * @var \WP_Post|null $post WP_Post instance on success or null on failure.
		 */
		$post = get_post();

		/**
		 * We only want to turn off the comment flood filter for our own chatrooms, not globally.
		 */
		if ( empty( $post ) || $this->post_type !== $post->post_type ) {
			return $is_flood;
		}

		return false;
	}
}
