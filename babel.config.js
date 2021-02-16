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
        plugins: ['inline-dotenv'],
    };
};
