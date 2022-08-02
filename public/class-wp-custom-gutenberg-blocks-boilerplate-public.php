<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://www.acmeit.org/
 * @since      1.0.0
 *
 * @package    Wp_Custom_Gutenberg_Blocks_Boilerplate
 * @subpackage Wp_Custom_Gutenberg_Blocks_Boilerplate/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Wp_Custom_Gutenberg_Blocks_Boilerplate
 * @subpackage Wp_Custom_Gutenberg_Blocks_Boilerplate/public
 * @author     codersantosh <codersantosh@gmail.com>
 */
class Wp_Custom_Gutenberg_Blocks_Boilerplate_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

    /**
     * Unique ID for this class.
     *
     * @since    1.0.0
     * @access   private
     * @var      string    $id    The ID of this class.
     */
    private $id;

    /**
     * Unique ID for this class.
     *
     * @since    1.0.0
     * @access   private
     * @var      string    $id    The ID of this class.
     */
    private $blocks;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string $plugin_name       The name of the plugin.
	 * @param      string $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version     = $version;
        $this->id     = $plugin_name.'-public';
        $this->blocks     = $plugin_name.'-blocks';

    }

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_public_resources() {

        /*Scripts dependency files*/
        $deps_file = WP_CUSTOM_GUTENBERG_BLOCKS_BOILERPLATE_PATH . 'build/public/public.asset.php';

        /*Fallback dependency array*/
        $dependency = [];
        $version = $this->version;

        /*Set dependency and version*/
        if ( file_exists( $deps_file ) ) {
            $deps_file = require( $deps_file );
            $dependency      = $deps_file['dependencies'];
            $version      = $deps_file['version'];
        }

        wp_enqueue_script( $this->id, WP_CUSTOM_GUTENBERG_BLOCKS_BOILERPLATE_URL . 'build/public/public.js', $dependency, $version, true );

        wp_enqueue_style( $this->id, WP_CUSTOM_GUTENBERG_BLOCKS_BOILERPLATE_URL . 'build/public/public.css', array(), $version );

        $localize = array(
            'version' => $version,
            'id' => $this->id,
        );
        wp_set_script_translations( $this->id, $this->plugin_name );
        wp_localize_script( $this->id, 'wpCustomGutenbergBlocksBoilerplateBuild', $localize );
	}
}
