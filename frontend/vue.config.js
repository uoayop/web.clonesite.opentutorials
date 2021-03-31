module.exports = { 
    //api 요청이 있을 때 어디에서 처리할지 설정 [devServer]
    devServer: { 
      proxy: { 
        '/api': { 
          target: 'http://localhost:3000/api',
          changeOrigin: true, 
          pathRewrite: { 
            '^/api': ''
          } 
        } 
      } 
    },
    // 배포 파일 위치를 지정
    outputDir: '../backend/public',
    transpileDependencies: [
      'vuetify'
    ]
}

