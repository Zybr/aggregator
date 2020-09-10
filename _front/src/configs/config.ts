const config = {
    back: {
        address: {
            host: "localhost",
            // host: "127.0.0.1",
            port: 3000,
            protocol: "http",
        },
    },
};

const backUrl = `${config.back.address.protocol}://${config.back.address.host}:${config.back.address.port}`;

export { config, backUrl };