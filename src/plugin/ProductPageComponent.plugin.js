import DownloadsList from '../components/DownloadsList';
import { MW_PRODUCT_DOWNLOADS } from './ProductPage.config';

export function ProductPageComponentOverride(ProductPageComponent) {
    return class ProductPageComponentExtended extends ProductPageComponent {
        renderMwDownloadsTab(key) {
            const {
                dataSource: {
                    mw_attachments: { items, is_group_by_section }
                }
            } = this.props;

            return <DownloadsList key={ key } items={ items } isGroupedBySection={ is_group_by_section } />;
        }
    };
}

export const tabMap = (member, instance) => ({
    ...member,
    [MW_PRODUCT_DOWNLOADS]: {
        name: __('Downloads'),
        shouldTabRender: () => {
            const { isMwDownloadsTabEmpty } = instance.props;

            return isMwDownloadsTabEmpty;
        },
        render: (key) => instance.renderMwDownloadsTab(key)
    }
});

export const getTabNames = (args, callback, instance) => callback(instance, args).map((name) => {
    if (name.value === 'Downloads') {
        return __(instance.props.dataSource.mw_attachments.tab_title);
    }

    return name;
});

export const config = {
    'Route/ProductPage/Component': {
        class: ProductPageComponentOverride,
        'member-property': {
            tabMap
        },
        'member-function': {
            getTabNames
        }
    }
};

export default config;
