const config = {
    collectCoverage: true,
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(t|j)sx?$': 'ts-jest',
    },
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
    ],
};

module.exports = config;
