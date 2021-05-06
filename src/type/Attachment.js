import PropTypes from 'prop-types';

export const AttachmentType = PropTypes.shape({
    id: PropTypes.number,
    icon_type: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    section_id: PropTypes.number,
    section_name: PropTypes.string,
    size_str: PropTypes.string,
    url: PropTypes.string
});
