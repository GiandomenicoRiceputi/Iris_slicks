var plugins = [{
      plugin: require('/Users/giando/WebstormProjects/JAM_STACK/master-gatsby-master/starter-files/gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/giando/WebstormProjects/JAM_STACK/master-gatsby-master/starter-files/gatsby/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/giando/WebstormProjects/JAM_STACK/master-gatsby-master/starter-files/gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"0nq3vq9a","dataset":"production","watchMode":true,"token":"skZDsxGxwAKAnsJ9vIPbABCfNsVEMQNNoWtQQhTxHa8yJTA6HftZw0y7o11k8Tvgh5g53CIxKZkfy9MMxXKIVQZGF0m0mcevojANIujREt5pi59OenRwG2acEFa54pQfUDcUXVN053es3GEujFAhBtwrcgak4NMWVn4I8yHRqFEkaidezUhI"},
    },{
      plugin: require('/Users/giando/WebstormProjects/JAM_STACK/master-gatsby-master/starter-files/gatsby/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
