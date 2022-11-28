const path = require('path')

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  // createPage({
  //   path: "/using-dsg",
  //   component: require.resolve("./src/templates/using-dsg.js"),
  //   context: {},
  //   defer: true,
  // })
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        // '@styles': path.resolve(__dirname, 'src/styles' )
        // '@config': path.resolve(__dirname, 'src/config'),
        // '@fonts': path.resolve(__dirname, 'src/fonts'),
        // '@hooks': path.resolve(__dirname, 'src/hooks'),
        // '@images': path.resolve(__dirname, 'src/images'),
        // '@pages': path.resolve(__dirname, 'src/pages'),
        // '@utils': path.resolve(__dirname, 'src/utils'),
      },
    },
  });
}