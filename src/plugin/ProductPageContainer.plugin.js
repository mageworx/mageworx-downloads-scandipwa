export function ProductPageContainerOverride(ProductPageContainer) {
    return class ProductPageContainerExtended extends ProductPageContainer {
        isMwDownloadsTabEmpty() {
            const dataSource = this.getDataSource();

            return !dataSource.mw_attachments?.items?.length;
        }
    };
}

export const containerProps = (args, callback, instance) => ({
    ...callback.apply(instance, args),
    isMwDownloadsTabEmpty: instance.isMwDownloadsTabEmpty()
});

export const config = {
    'Route/ProductPage/Container': {
        class: ProductPageContainerOverride,
        'member-function': {
            containerProps
        }
    }
};

export default config;
