module.exports = (_baseConfig, _env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("awesome-typescript-loader")
  })
  config.resolve.extensions.push(".ts", ".tsx")
  return config
}