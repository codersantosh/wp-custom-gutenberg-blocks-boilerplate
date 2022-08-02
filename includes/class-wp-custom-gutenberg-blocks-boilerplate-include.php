<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://www.acmeit.org/
 * @since      1.0.0
 *
 * @package    Wp_Custom_Gutenberg_Blocks_Boilerplate
 * @subpackage Wp_Custom_Gutenberg_Blocks_Boilerplate/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Wp_Custom_Gutenberg_Blocks_Boilerplate
 * @subpackage Wp_Custom_Gutenberg_Blocks_Boilerplate/admin
 * @author     codersantosh <codersantosh@gmail.com>
 */
class Wp_Custom_Gutenberg_Blocks_Boilerplate_Include {

	/**
	 * The ID of this plugin.
     * Used on slug of plugin menu.
     * Used on Root Div ID for React too.
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
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string $plugin_name       The name of this plugin.
	 * @param      string $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version     = $version;

		/** Register Dynamic blocks.*/
        $this->register_dynamic_blocks();
    }


    /**
     * Callback functions for block_categories_all,
     * Adding Block Categories
     *
     * @since    1.0.0
     * @access   public
     *
     * @param array $categories
     * @return array merge $categories
     */
    public function add_block_categories( $categories ) {

        return array_merge(
            array(
                array(
                    'slug'  => 'wp-custom-gutenberg-blocks-boilerplate',
                    'title' => __( 'Gutenberg blocks boilerplate', 'wp-custom-gutenberg-blocks-boilerplate' ),
                ),
            ),
            $categories
        );
    }

    /**
     * Registers block types using metadata files.
     * Dynamic blocks are registered separately.
     *
     * @since 1.0.0
     */
    public function register_block_types_from_metadata() {

        /*All Blocks*/
        $block_folders = array(
            'step-1-intro',
            'step-2-styles-scripts',
            'step-3-block-controls',
            'step-4-normal-block',
            'step-5-inner-block'
        );
        foreach ( $block_folders as $block_folder ) {
            register_block_type_from_metadata(
                WP_CUSTOM_GUTENBERG_BLOCKS_BOILERPLATE_PATH . 'build/blocks/' . $block_folder
            );
        }
    }

    /**
     * Dynamic blocks are registered separately.
     * Include all dynamic blocks files
     *
     * @since 1.0.0
     */
    public function register_dynamic_blocks() {
        require WP_CUSTOM_GUTENBERG_BLOCKS_BOILERPLATE_PATH  . 'build/blocks/step-6-dynamic-block/index.php';
    }
}
