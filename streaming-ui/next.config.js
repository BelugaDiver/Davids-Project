/** @type {import('next').NextConfig} */
const nextConfig = {
   webpack: (config, options) => {
      config.module.rules.push(
         {
            test: /\.(glsl|frag|vert)$/,
            use: ['glslify-import-loader', 'raw-loader', 'glslify-loader']
         },
         {
            test: /three\/examples\/js/,
            use: 'imports-loader?THREE=three'
         }
      )

      return config;
   }
}

module.exports = nextConfig
