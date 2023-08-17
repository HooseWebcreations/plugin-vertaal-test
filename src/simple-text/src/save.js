import {
    useBlockProps
} from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

export default function save({ attributes }) {

    const {
        text
    } = attributes;

    return (
        <div {...useBlockProps.save({ className: 'simple-text' })}>
            {__('Put some simple text here', 'plugin-vertaal-test')}
        </div>
    )

}