import { Field } from 'Util/Query';

export const _getProductInterfaceFields = (args, callback, instance) => {
    const fields = callback.apply(instance, args);
    const { isSingleProduct } = instance.options;

    if (isSingleProduct) {
        const itemsField = new Field('items').addFieldList([
            'icon_type',
            'id',
            'name',
            'url',
            'size_str',
            'downloads_number',
            'description',
            'section_name',
            'section_id'
        ]);

        const attachmentsField = new Field('mw_attachments').addFieldList([
            'tab_title',
            'block_title',
            'is_group_by_section',
            'how_to_download_message',
            itemsField
        ]);

        return [...fields, attachmentsField];
    }

    return fields;
};

export const config = {
    'Query/ProductList': {
        'member-function': {
            _getProductInterfaceFields
        }
    }
};

export default config;
