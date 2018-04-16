<?php
/**
 * The template for displaying all single chatrooms.
 *
 * This template can be overridden by copying it to yourtheme/single-chatroom.php.
 *
 * This template is based on twentyseventeen/single.php.
 * Your theme may have different wrapping markup and classes.
 *
 * @link    https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WordPress_Comment_Based_Chat
 * @version 1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();

?>
	<div class="wrap">
		<div id="primary" class="content-area">
			<main id="main" class="site-main" role="main">

				<?php while ( have_posts() ) : ?>

					<?php the_post(); ?>

					<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
						<header class="entry-header">
							<h1 class="entry-title">
								<?php the_title(); ?>
							</h1>
						</header><!-- .entry-header -->

						<?php if ( ! is_user_logged_in() ) : ?>
							<p>
								<?php esc_html_e( 'You need to be logged in to participate in this chatroom.', 'chatroom' ); ?>
							</p>
							<p>
								<a href="<?php echo esc_url( wp_login_url( get_permalink() ) ); ?>">
									<?php esc_html_e( 'Login Here.', 'chatroom' ); ?>
								</a>
							</p>
						<?php elseif ( ! comments_open() ) : ?>
							<p>
								<?php esc_html_e( 'This chatroom is closed.', 'chatroom' ); ?>
							</p>
						<?php else : ?>
							<noscript>
								<?php esc_html_e( 'This feature requires JavaScript.', 'chatroom' ); ?>
							</noscript>
							<div id="commentchat"></div>
						<?php endif; ?>
					</div>

				<?php endwhile; ?>

			</main>
		</div>
	</div>

<?php

get_footer();
