module.exports = {
    references: [
        {
            type: 'html',
            value: '<strong>References</strong>',
            defaultStyle: true,
        },
        'references-overview',
        {
            type: 'html',
            value: '<strong>Web Development</strong>',
            defaultStyle: true,
        },

        {
            label: 'UI Components',
            type: 'category',
            collapsed: true,
            link: {
                type: 'generated-index',
                title: 'Web UI Components',
                slug: 'ui/webcomponents',
            },
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'ui/components',
                },
            ],
        },

        {
            type: 'html',
            value: '<strong>CLI Tooling</strong>',
            defaultStyle: true,
        },
        {
            label: 'd2 style',
            type: 'category',
            collapsed: true,
            link: {
                type: 'doc',
                id: 'cli/style/getting-started',
            },
            items: [
                {
                    id: 'cli/style/getting-started',
                    type: 'doc',
                    label: 'Getting Started',
                },
                {
                    id: 'cli/style/migrate-guide',
                    type: 'doc',
                    label: 'Migration Guide',
                },
                {
                    Configuration: [
                        {
                            id: 'cli/style/ignore-files',
                            type: 'doc',
                            label: 'Ignore Files',
                        },
                        {
                            id: 'cli/style/overrides',
                            type: 'doc',
                            label: 'Configuration Overrides',
                        },
                    ],
                },
                { id: 'cli/style/faq', type: 'doc', label: 'FAQ' },
                {
                    id: 'cli/style/api',
                    type: 'doc',
                    label: 'API Reference',
                },
                {
                    id: 'cli/style/changelog',
                    type: 'doc',
                    label: 'Changelog',
                },
            ],
        },

        {
            label: 'Cypress',
            type: 'category',
            collapsed: true,
            link: {
                type: 'doc',
                id: 'cli/cypress/getting-started',
            },
            items: [
                {
                    id: 'cli/cypress/getting-started',
                    type: 'doc',
                    label: 'Getting Started',
                },
                'cli/cypress/upgrade-guide',
                {
                    Guides: [
                        'cli/cypress/guides/setting-up-cli-tool',
                        'cli/cypress/guides/enable-auto-login',
                        'cli/cypress/guides/using-cucumber',
                        'cli/cypress/guides/using-the-network-shim',
                        'cli/cypress/guides/cross-site-cookies',
                        'cli/cypress/guides/custom-data-test-syntax',
                        'cli/cypress/guides/add-login-credentials',
                    ],
                    'API: Commands': [
                        'cli/cypress/commands/getWithDataTest',
                        'cli/cypress/commands/findWithDataTest',
                        'cli/cypress/commands/fillInLoginForm',
                        'cli/cypress/commands/all',
                    ],
                    'API: Helper Functions': [
                        'cli/cypress/helpers',
                        'cli/cypress/helpers/dataTestNameToSelector',
                        'cli/cypress/helpers/parseSelectorWithDataTest',
                    ],
                    'API: Setup': ['cli/cypress/setups/enable-auto-login'],
                    'Developer Docs': [
                        'cli/cypress/developer',
                        'cli/cypress/developer/install',
                        'cli/cypress/developer/network-shim',
                        'cli/cypress/developer/troubleshooting',
                    ],
                },
                {
                    id: 'cli/cypress/changelog',
                    label: 'Changelog',
                    type: 'doc',
                },
            ],
        },

        {
            label: 'CLI',
            type: 'category',
            collapsed: true,
            link: {
                type: 'doc',
                id: 'cli/readme',
            },
            items: [
                'cli/readme',
                'cli/cli/commands/d2-overview',
                {
                    'd2 cluster': [
                        'cli/cli/commands/d2-cluster',
                        'cli/cli/recipes/stable',
                        'cli/cli/recipes/development',
                        'cli/cli/recipes/custom-dhis-config',
                        'cli/cli/recipes/custom-docker-image',
                        'cli/cli/commands/d2-utils-release',
                    ],
                },
            ],
        },
        {
            type: 'html',
            value: '<strong>Mobile Development</strong>',
            defaultStyle: true,
        },
        {
            type: 'link',
            label: 'Android SDK',
            href: 'https://docs.dhis2.org/en/develop/developing-with-the-android-sdk/about-this-guide.html',
        },
        {
            type: 'link',
            label: 'Mobile UI Library',
            href: 'https://dhis2.github.io/dhis2-mobile-ui/api/-mobile%20-u-i/org.hisp.dhis.mobile.ui.designsystem.component/index.html',
        },
        {
            type: 'html',
            value: '<strong>Additional References</strong>',
            defaultStyle: true,
        },
        'aditionalreferences',
        {
            type: 'link',
            label: 'Design System',
            href: '/design',
        },
        {
            type: 'link',
            label: 'Web API',
            href: 'https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-241/introduction.html',
        },
    ],
}
