<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://www.acmeit.org/
 * @since      1.0.0
 *
 * @package    Wp_Custom_Gutenberg_Blocks_Boilerplate
 * @subpackage Wp_Custom_Gutenberg_Blocks_Boilerplate/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Wp_Custom_Gutenberg_Blocks_Boilerplate
 * @subpackage Wp_Custom_Gutenberg_Blocks_Boilerplate/includes
 * @author     codersantosh <codersantosh@gmail.com>
 */
class Wp_Custom_Gutenberg_Blocks_Boilerplate_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'wp-custom-gutenberg-blocks-boilerplate',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}
}
