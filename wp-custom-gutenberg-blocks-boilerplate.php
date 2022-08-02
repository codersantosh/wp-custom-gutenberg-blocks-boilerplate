<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://www.acmeit.org/
 * @since             1.0.0
 * @package           Wp_Custom_Gutenberg_Blocks_Boilerplate
 *
 * @wordpress-plugin
 * Plugin Name:       WP Custom Gutenberg Blocks Boilerplate - Create Custom WordPress Gutenberg Blocks
 * Plugin URI:        https://www.addonspress.com/wordpress-starter-plugins/wp-custom-gutenberg-blocks-boilerplate
 * Description:       Create Custom WordPress Gutenberg Blocks
 * Version:           1.0.0
 * Author:            codersantosh
 * Author URI:        https://www.acmeit.org/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       wp-custom-gutenberg-blocks-boilerplate
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Current plugin path.
 * Current plugin url.
 * Current plugin version.
 *
 * Rename these constants for your plugin
 * Update version as you release new versions.
 */

define( 'WP_CUSTOM_GUTENBERG_BLOCKS_BOILERPLATE_PATH', plugin_dir_path( __FILE__ ) );
define( 'WP_CUSTOM_GUTENBERG_BLOCKS_BOILERPLATE_URL', plugin_dir_url( __FILE__ ) );
define( 'WP_CUSTOM_GUTENBERG_BLOCKS_BOILERPLATE_VERSION', '1.0.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-wp-custom-gutenberg-blocks-boilerplate-activator.php
 */
function activate_wp_custom_gutenberg_blocks_boilerplate() {
	require_once WP_CUSTOM_GUTENBERG_BLOCKS_BOILERPLATE_PATH . 'includes/class-wp-custom-gutenberg-blocks-boilerplate-activator.php';
	Wp_Custom_Gutenberg_Blocks_Boilerplate_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-wp-custom-gutenberg-blocks-boilerplate-deactivator.php
 */
function deactivate_wp_custom_gutenberg_blocks_boilerplate() {
	require_once WP_CUSTOM_GUTENBERG_BLOCKS_BOILERPLATE_PATH . 'includes/class-wp-custom-gutenberg-blocks-boilerplate-deactivator.php';
	Wp_Custom_Gutenberg_Blocks_Boilerplate_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_wp_custom_gutenberg_blocks_boilerplate' );
register_deactivation_hook( __FILE__, 'deactivate_wp_custom_gutenberg_blocks_boilerplate' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require WP_CUSTOM_GUTENBERG_BLOCKS_BOILERPLATE_PATH . 'includes/class-wp-custom-gutenberg-blocks-boilerplate.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_wp_custom_gutenberg_blocks_boilerplate() {

	$plugin = new Wp_Custom_Gutenberg_Blocks_Boilerplate();
	$plugin->run();

}
run_wp_custom_gutenberg_blocks_boilerplate();
