import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import Edit from './edit';
import save from './save';

registerBlockType('plugin-vertaal-test/simple-text', {
    apiVersion: 2,
    title: __("Just a simple text", "plugin-vertaal-test"),
    icon: {
        src: "button",
        background: "#47dba4",
        foreground: "#ffffff"
    },
    description: __("Very simple text", "plugin-vertaal-test"),
    keywords: [
        __("Simple text", "plugin-vertaal-test")
    ],
    attributes: {
        text: {
            type: "string",
            default: __("Some simple text", "plugin-vertaal-test")
        },
    },
    supports: {
        html: true,
        className: false,
        color: {
            background: false,
            gradients: false,
            text: false
        }
    },
    edit: Edit,
    save,
});