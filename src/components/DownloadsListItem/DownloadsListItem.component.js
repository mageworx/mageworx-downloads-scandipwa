import { PureComponent } from 'react';

import { AttachmentType } from '../../type/Attachment';

import './DownloadsListItem.style';

/** @namespace MageworxDownloadsGraphql/Components/DownloadsListItem/Component/DownloadsListItemComponent */
export class DownloadsListItemComponent extends PureComponent {
    static propTypes = {
        attachment: AttachmentType.isRequired
    };

    render() {
        const {
            attachment: {
                name, url, description, size_str, downloads_number
            }
        } = this.props;

        return (
            <div block="MwDownloads__Item-Container">
                <div block="MwDownloads__Link-Container">
                    <a
                      href={ url }
                      block="MwDownloads__Link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        { name }
                    </a>
                    <span block="MwDownloads__Meta">
                        (
                        { size_str }
                        { downloads_number !== null
                            && `, Number of downloads: ${downloads_number}` }
                        )
                    </span>
                </div>
                { description && (
                    <span
                      block="MwDownloads__Item-Description"
                        // eslint-disable-next-line react/no-danger
                      dangerouslySetInnerHTML={ { __html: description } }
                    />
                ) }
            </div>
        );
    }
}

export default DownloadsListItemComponent;
