<?php
/**
 * Server-side rendering of the `dynamic block` block.
 *
 * @package wp-custom-gutenberg-blocks-boilerplate
 */

/**
 * Renders the `dynamic block` block on the server.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 *
 * @return string Returns recent posts.
 */
function wp_custom_gutenberg_blocks_boilerplate_dynamic_block( $attributes, $content, $block ) {
    $recent_posts = wp_get_recent_posts( array(
        'numberposts' => 1,
        'post_status' => 'publish',
    ) );
    if ( count( $recent_posts ) === 0 ) {
        return esc_html__('No posts','wp-custom-gutenberg-blocks-boilerplate');
    }
    $post = $recent_posts[ 0 ];
    $post_id = $post['ID'];

    $wrapper_attributes = get_block_wrapper_attributes();

    return sprintf( '<div %1$s>', $wrapper_attributes ) .
        sprintf(
            '<a class="wp-custom-gutenberg-blocks-boilerplate-latest-post" href="%1$s">%2$s</a>',
            esc_url( get_permalink( $post_id ) ),
            esc_html( get_the_title( $post_id ) )
        ).
        '</div>';
}

/**
 * Registers the `dynamic block` block on the server.
 */
function register_wp_custom_gutenberg_blocks_boilerplate_dynamic_block() {
	register_block_type_from_metadata(
		__DIR__,
		array(
			'render_callback' => 'wp_custom_gutenberg_blocks_boilerplate_dynamic_block',
		)
	);
}
add_action( 'init', 'register_wp_custom_gutenberg_blocks_boilerplate_dynamic_block' );
