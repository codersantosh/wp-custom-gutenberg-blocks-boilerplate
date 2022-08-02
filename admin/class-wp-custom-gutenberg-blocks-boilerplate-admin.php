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
class Wp_Custom_Gutenberg_Blocks_Boilerplate_Admin {

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

	}

    /**
     * Add Admin Page Menu page.
     *
     * @since    1.0.0
     */
	public function add_admin_menu() {

		add_menu_page(
			esc_html__( 'React Setting', 'wp-custom-gutenberg-blocks-boilerplate' ),
			esc_html__( 'React Setting', 'wp-custom-gutenberg-blocks-boilerplate' ),
			'manage_options',
			$this->plugin_name,
			array( $this, 'add_setting_root_div' )
		);
	}

    /**
     * Add Root Div For React.
     *
     * @since    1.0.0
     */
	public function add_setting_root_div() {
		echo '<div id="' . $this->plugin_name . '"></div>';
	}

    /**
     * Register the CSS/JavaScript Resources for the admin area.
     *
     * Use Condition to Load it Only When it is Necessary
     *
     * @since    1.0.0
     */
    public function enqueue_resources() {

        /**
         * This function is provided for demonstration purposes only.
         *
         * An instance of this class should be passed to the run() function
         * defined in Wp_Custom_Gutenberg_Blocks_Boilerplate_Loader as all of the hooks are defined
         * in that particular class.
         *
         * The Wp_Custom_Gutenberg_Blocks_Boilerplate_Loader will then create the relationship
         * between the defined hooks and the functions defined in this
         * class.
         */

        $screen              = get_current_screen();
        $admin_scripts_bases = array( 'toplevel_page_' . $this->plugin_name );
        if ( ! ( isset( $screen->base ) && in_array( $screen->base, $admin_scripts_bases ) ) ) {
            return;
        }

        wp_enqueue_style( 'at-grid', WP_CUSTOM_GUTENBERG_BLOCKS_BOILERPLATE_URL. 'assets/library/at-grid/at-grid.min.css', array(), $this->version );

        $at_grid_css_var = "
            :root{
                --at-container-sm: 540px;
                --at-container-md: 720px;
                --at-container-lg: 960px;
                --at-container-xl: 1140px;
                --at-gutter:15px;
            }
        ";
        wp_add_inline_style( 'at-grid', $at_grid_css_var );
        
        /*Scripts dependency files*/
        $deps_file = WP_CUSTOM_GUTENBERG_BLOCKS_BOILERPLATE_PATH . 'build/admin/settings.asset.php';

        /*Fallback dependency array*/
        $dependency = [];
        $version = $this->version;

        /*Set dependency and version*/
        if ( file_exists( $deps_file ) ) {
            $deps_file = require( $deps_file );
            $dependency      = $deps_file['dependencies'];
            $version      = $deps_file['version'];
        }

        
        wp_enqueue_script( $this->plugin_name, WP_CUSTOM_GUTENBERG_BLOCKS_BOILERPLATE_URL . 'build/admin/settings.js', $dependency, $version, true );

        wp_enqueue_style( $this->plugin_name, WP_CUSTOM_GUTENBERG_BLOCKS_BOILERPLATE_URL . 'build/admin/style-settings.css', array('wp-components'), $version );

        $localize = array(
            'version' => $version,
            'root_id' => $this->plugin_name,
        );
        wp_set_script_translations( $this->plugin_name, $this->plugin_name );
        wp_localize_script( $this->plugin_name, 'wpCustomGutenbergBlocksBoilerplateBuild', $localize );
    }

    /**
     * Register settings.
     * Common callback function of rest_api_init and admin_init
     * Schema: http://json-schema.org/draft-04/schema#
     *
     * Add your own settings fields here
     *
     * @since 1.0.0
     *
     * @param null.
     * @return void
     */
    public function register_settings() {
        $defaults = wp_custom_gutenberg_blocks_boilerplate_default_options();
        register_setting(
            'wp_custom_gutenberg_blocks_boilerplate_settings_group',
            'wp_custom_gutenberg_blocks_boilerplate_options',
            array(
                'type'         => 'object',
                'default'      => $defaults,
                'show_in_rest' => array(
                    'schema' => array(
                        'type'       => 'object',
                        'properties' => array(
                            /*===Settings===*/
                            /*Settings -> General*/
                            'setting_1' => array(
                                'type' => 'string',
                                'default' => $defaults['setting_1']
                            ),
                            'setting_2' => array(
                                'type' => 'string',
                                'default' => $defaults['setting_2']
                            ),
                            /*Settings -> Advanced*/
                            'setting_3' => array(
                                'type' => 'boolean',
                                'default' => $defaults['setting_3']
                            ),
                            'setting_4' => array(
                                'type' => 'boolean',
                                'default' => $defaults['setting_4']
                            ),
                            'setting_5' => array(
                                'type' => 'string',
                                'default' => $defaults['setting_5'],
                                'sanitize_callback' => 'sanitize_key',
                            ),
                        ),
                    ),
                ),
            )
        );
    }
}
