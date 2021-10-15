module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            ['inline-dotenv'],
            [
                'module-resolver',
                {
                    root: ['./'],
                    extensions: ['.ts', '.tsx', '.png'],
                    alias: {
                        '~/src': './src',
                        '~/components': './src/components',
                        '~/contexts': './src/contexts',
                        '~/screens': './src/screens',
                        '~/generated': './src/generated',
                        '~/assets': './assets',
                        '~/ducks': './src/ducks',
                    },
                },
            ],
        ],
    };
};
