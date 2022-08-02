<?php
/**
 * Get the Plugin Default Options.
 *
 * @since 1.0.0
 *
 * @param null
 *
 * @return array Default Options
 *
 * @author     codersantosh <codersantosh@gmail.com>
 *
 */
if ( ! function_exists( 'wp_custom_gutenberg_blocks_boilerplate_default_options' ) ) :
	function wp_custom_gutenberg_blocks_boilerplate_default_options() {
		$default_theme_options = array(
			'setting_1' => esc_html__( 'Default Setting 1', 'wp-custom-gutenberg-blocks-boilerplate' ),
			'setting_2' => esc_html__( 'Default Setting 2', 'wp-custom-gutenberg-blocks-boilerplate' ),
			'setting_3' => false,
			'setting_4' => true,
			'setting_5' => 'option-1',
		);

		return apply_filters( 'wp_custom_gutenberg_blocks_boilerplate_default_options', $default_theme_options );
	}
endif;

/**
 * Get the Plugin Saved Options.
 *
 * @since 1.0.0
 *
 * @param string $key optional option key
 *
 * @return mixed All Options Array Or Options Value
 *
 * @author     codersantosh <codersantosh@gmail.com>
 *
 */
if ( ! function_exists( 'wp_custom_gutenberg_blocks_boilerplate_get_options' ) ) :
	function wp_custom_gutenberg_blocks_boilerplate_get_options( $key = '' ) {
		$options         = get_option( 'wp_custom_gutenberg_blocks_boilerplate_options' );
		$default_options = wp_custom_gutenberg_blocks_boilerplate_default_options();

		if ( ! empty( $key ) ) {
			if ( isset( $options[ $key ] ) ) {
				return $options[ $key ];
			}
			return isset( $default_options[ $key ] ) ? $default_options[ $key ] : false;
		} else {
			if ( ! is_array( $options ) ) {
				$options = array();
			}
			return array_merge( $default_options, $options );
		}
	}
endif;