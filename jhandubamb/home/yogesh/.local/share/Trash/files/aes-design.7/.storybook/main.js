module.exports = {
  stories: [
    // Keep stacked
    './stories/**/*.stories.mdx',
    './stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
  ],
  webpackFinal: async config => {
    /**
     * Delete the ProgressPlugin from Storybook to remove log file spam. The
     * repeated output from this plugin causes massive spam with the `concurrently`
     * module we're using to run multiple npm scripts simultaneously.
     */

    const progressKey = config.plugins.findIndex(
      v => v.constructor.name === 'ProgressPlugin',
    )
    config.plugins.splice(progressKey, 1)

    /**
     * CSS handling, specifically overriding postcss loader
     */
    // Find the only Storybook webpack rule that tests for css
    const cssRule = config.module.rules.find(rule =>
      'test.css'.match(rule.test),
    )
    // Which loader in this rule mentions the custom Storyubook postcss-loader"?
    const loaderIndex = cssRule.use.findIndex(loader => {
      // Loaders can be strings or objects
      const loaderString = typeof loader === 'string' ? loader : loader.loader
      // Find the first mention of "postcss-loader", it may be in a string like:
      // "@storybook/core/node_modules/postcss-loader"
      return loaderString.includes('postcss-loader')
    })
    // Simple loader string form, removes the obsolete "options" key
    cssRule.use[loaderIndex] = 'postcss-loader'

    // Uncomment the following to debug
    // console.dir(config, { depth: null })
    return config
  },
}
