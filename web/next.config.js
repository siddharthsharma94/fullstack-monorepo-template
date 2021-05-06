const withPlugins = require("next-compose-plugins");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

const config = {
    future: {
        webpack5: true,
    },
};

module.exports = withPlugins([[withBundleAnalyzer]], config);
