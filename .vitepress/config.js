module.exports = {
    title: 'nano-css',
    description: 'Distilled CSS-in-JS for gourmet developers',
    themeConfig: {
        nav: [
            {text: 'docs', link: '/docs/Installation'},
            {text: 'GitHub', link: 'https://github.com/streamich/nano-css'}
        ],
        sidebar: {
            '/docs/': [
                {
                    text: 'Installation',
                    link: '/docs/Installation'
                },
                {
                    text: 'Addons',
                    children: [
                        {text: 'Addons', link: '/docs/Addons'},
                        {text: 'put()', link: '/docs/put'},
                        {text: 'rule()', link: '/docs/rule'},
                        {text: 'drule()', link: '/docs/drule'},
                        {text: 'sheet()', link: '/docs/sheet'},
                        {text: 'dsheet()', link: '/docs/dsheet'},
                        {text: 'jsx()', link: '/docs/jsx'},
                        {text: 'useStyles()', link: '/docs/useStyles'},
                        {text: 'withStyles()', link: '/docs/withStyles'},
                        {text: 'decorator', link: '/docs/decorator'},
                        {text: 'component', link: '/docs/component'},
                        {text: 'style()', link: '/docs/style'},
                        {text: 'styled()()', link: '/docs/styled'},
                        {text: 'hyperstyle()', link: '/docs/hyperstyle'},
                        {text: 'stable', link: '/docs/stable'},
                        {text: 'atoms', link: '/docs/atoms'},
                        {text: 'emmet', link: '/docs/emmet'},
                        {text: 'nesting', link: '/docs/nesting'},
                        {text: 'keyframes()', link: '/docs/keyframes'},
                        {text: 'hydrate()', link: '/docs/hydrate'},
                        {text: 'prefixer', link: '/docs/prefixer'},
                        {text: 'stylis', link: '/docs/stylis'},
                        {text: 'unitless', link: '/docs/unitless'},
                        {text: '!important', link: '/docs/important'},
                        {text: ':global', link: '/docs/global'},
                        {text: 'animate/*', link: '/docs/animations'},
                        {text: 'reset/*', link: '/docs/resets'},
                        {text: 'reset-font', link: '/docs/reset-font'},
                        {text: 'googleFont()', link: '/docs/googleFont'},
                        {text: 'limit', link: '/docs/limit'},
                        {text: 'amp', link: '/docs/amp'},
                        {text: 'virtual', link: '/docs/virtual'},
                        {text: 'spread', link: '/docs/spread'},
                        {text: 'array', link: '/docs/array'},
                        {text: 'snake', link: '/docs/snake'},
                        {text: 'tachyons', link: '/docs/tachyons'},
                        {text: 'rtl', link: '/docs/rtl'},
                        {text: 'extract', link: '/docs/extract'},
                        {text: 'sourcemaps', link: '/docs/sourcemaps'},
                        {text: '.units', link: '/docs/units'},
                        {text: 'cssom', link: '/docs/cssom'},
                        {text: 'vcssom', link: '/docs/vcssom'}
                    ]
                },
                {
                    text: 'Presets',
                    link: '/docs/Presets'
                },
                {
                    text: 'Server-side rendering',
                    link: '/docs/SSR'
                }
            ]
        }
    }
};
