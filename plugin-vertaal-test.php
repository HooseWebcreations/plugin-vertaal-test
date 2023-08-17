<?php
/*
Plugin Name: Plugin vertaal test
Plugin URI: https://github.com/HooseWebcreations/plugin-vertaal-test.git
Description: Plugin om te vertaling te testen
Version: 1.0
Requires at least: 6.0
Requires PHP: 7.0
Author: Hoose Webcreations - Annemarie
Author URI: https://hoose.nl
License: GPLv3 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: plugin-vertaal-test
Domain Path: /languages
*/

if (!defined('ABSPATH')) exit;


add_shortcode('pvttranslatesentence', 'pvt_translatesentence');
function pvt_translatesentence($atts)
{

    $atts = shortcode_atts(array(), $atts, 'pvttranslatesentence');

    $output = '';

    $output .= __('Translate this sentence!', 'plugin-vertaal-test');

    return $output;
}

add_action('init', 'pvt_register_gutenberg_blocks');
function pvt_register_gutenberg_blocks()
{

    // First check if Gutenberg is installed
    if (!function_exists('register_block_type')) {
        return;
    }

    wp_enqueue_style(
        'pvt-extension-style', // Handle.
        plugins_url('style.min.css', __FILE__), // Block style CSS.
        array(), // Dependency to include the CSS after it.
        filemtime(plugin_dir_path(__FILE__) . './style.min.css')
    );

    wp_register_script(
        'pvt-editor-script',
        plugins_url('build/index.js', __FILE__),
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-hooks'),
        filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
    );

    // styles for the backend
    wp_register_style(
        'pvt-editor-style',
        plugins_url('build/style-index.css', __FILE__),
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'build/style-index.css')
    );


    $blocks = array(
        'plugin-vertaal-test/simple-text'
    );

    foreach ($blocks as $block) {
        register_block_type($block, array(
            'api_version' => 2,
            'editor_script' => 'pvt-editor-script',
            'editor_style' => 'pvt-editor-style',
        ));
    }
}


function pvt_plugin_enqueue_script()
{
    wp_enqueue_script('pvt-editor-script', plugin_dir_path(__FILE__) . 'build/index.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'pvt_plugin_enqueue_script');


// Stel vertalingen in voor het JavaScript-bestand
function pvt_plugin_set_script_translations()
{
    wp_set_script_translations(
        'pvt-editor-script',
        'plugin-vertaal-test',
        plugin_dir_path(__FILE__) . 'languages'
    );
}
add_action('wp_enqueue_scripts', 'pvt_plugin_set_script_translations');


add_action('init', 'pvt_load_textdomain');
function pvt_load_textdomain()
{
    load_plugin_textdomain('plugin-vertaal-test', false, dirname(plugin_basename(__FILE__)) . '/languages');
}


function myguten_set_script_translations()
{
    wp_set_script_translations(
        'pvt-editor-script',
        'plugin-vertaal-test',
        plugin_dir_path(__FILE__) . 'languages'
    );
}
add_action('init', 'myguten_set_script_translations');
