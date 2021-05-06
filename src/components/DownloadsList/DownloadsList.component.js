import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import { AttachmentType } from '../../type/Attachment';
import DownloadsListItem from '../DownloadsListItem';

import './DownloadsList.style';

/** @namespace MageworxDownloadsGraphql/Components/DownloadsList/Component/DownloadsListComponent */
export class DownloadsListComponent extends PureComponent {
    static propTypes = {
        items: PropTypes.arrayOf(AttachmentType).isRequired,
        isGroupedBySection: PropTypes.bool.isRequired
    };

    renderList() {
        const { items, isGroupedBySection } = this.props;

        if (isGroupedBySection) {
            const sections = items.reduce((acc, item) => {
                (acc[item.section_id] = acc[item.section_id] || {
                    name: item.section_name,
                    items: []
                }).items.push(item);

                return acc;
            }, {});

            return Object.values(sections).map(({ name, items }, index) => (
                <li
                  key={ String(index) }
                  tabIndex="-1"
                  role="treeitem"
                  aria-expanded="true"
                  block="MwDownloads__Item"
                >
                    <strong>{ name }</strong>
                    <ul role="group" block="MwDownloads__List">
                        { items.map((item) => (
                            <li
                              key={ item.id }
                              role="treeitem"
                              tabIndex="-1"
                              block="MwDownloads__Item"
                            >
                                <DownloadsListItem attachment={ item } />
                            </li>
                        )) }
                    </ul>
                </li>
            ));
        }

        return items.map((item) => (
            <li
              key={ item.id }
              tabIndex="-1"
              role="treeitem"
              aria-expanded="true"
              block="MwDownloads__Item"
            >
                <DownloadsListItem attachment={ item } />
            </li>
        ));
    }

    render() {
        return (
            <section block="MwDownloads">
                <ul role="tree" block="MwDownloads__List">
                    { this.renderList() }
                </ul>
            </section>
        );
    }
}

export default DownloadsListComponent;
