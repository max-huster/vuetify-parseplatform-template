module.exports = {
    transpileDependencies: [
        'vuetify',
        "vuex-module-decorators"
    ],
    pwa: {
        name: 'Todos',
        themeColor: '#1976d2',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',

        // configure the workbox plugin
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: 'dev/sw.js',
            // ...other Workbox options...
        }
    }
}
