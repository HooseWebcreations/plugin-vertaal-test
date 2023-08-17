import {
    useBlockProps
} from '@wordpress/block-editor';


import { __ } from '@wordpress/i18n';

export default function Edit(props) {

    const {
        attributes,
        setAttributes
    } = props;

    const {
        text
    } = attributes;

    return (
        <div {...useBlockProps({ className: 'simple-text' })}>
            {__('Put some simple text here', 'plugin-vertaal-test')}
        </div>
    )
}