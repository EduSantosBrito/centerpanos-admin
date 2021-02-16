module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        env: {
            development: {
                plugins: [
                    [
                        'inline-dotenv',
                        {
                            path: '.env.development', // See motdotla/dotenv for more options
                        },
                    ],
                ],
            },
        },
        plugins: [
            'inline-dotenv',
            [
                'module-resolver',
                {
                    root: ['./'],
                    extensions: ['.ts', '.tsx'],
                    alias: {
                        '~/src': './src',
                        '~/components': './src/components',
                        '~/contexts': './src/contexts',
                        '~/screens': './src/screens',
                        '~/generated': './src/generated',
                        '~/assets': './assets',
                    },
                },
            ],
        ],
    };
};
