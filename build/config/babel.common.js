const r = m => require.resolve(m)

function preset(context, options = {}) {
  const { browser = false, debug = false } = options
  const { NODE_ENV, BABEL_ENV } = process.env

  const PRODUCTION = (BABEL_ENV || NODE_ENV) === "production"

  const browserConfig = {
    useBuiltIns: false,
    targets: {
      browsers: PRODUCTION
        ? [`last 4 versions`, `safari >= 7`, "ie >= 10"]
        : [`last 2 versions`, `not ie <= 11`, `not android 4.4.3`],
    },
  }

  const nodeConfig = {
    targets: {
      node: PRODUCTION ? 10.0 : "current",
    },
  }

  return {
    presets: [
      [
        r("@babel/preset-env"),
        Object.assign(
          {
            loose: true,
            debug: !!debug,
            useBuiltIns: "entry",
            shippedProposals: true,
            modules: "commonjs",
          },
          browser ? browserConfig : nodeConfig
        ),
      ],
      r("@babel/preset-typescript"),
    ],
    plugins: [
      r("@babel/plugin-proposal-async-generator-functions"),
      r("@babel/plugin-proposal-class-properties"),
      r("@babel/plugin-proposal-object-rest-spread"),
      r("@babel/plugin-proposal-optional-chaining"),
      r("@babel/plugin-transform-runtime"),
    ],
  }
}

module.exports = preset
