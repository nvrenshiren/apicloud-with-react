const fs = require('fs-extra')
const path = require('path')
const Spritesmith = require('spritesmith')
const checkDir = path.join(__dirname, '../src/statics/_icons')
const outDir = path.join(__dirname, '../src/statics/img')
const outLess = path.join(__dirname, '../src/statics/css/sprite.less')
const outPng = path.join(__dirname, '../src/statics/img/sprite.png')
const methods = {
  init: function () {
    let that = this
    fs.unlink(outLess, function (err) {
      !err && console.log(`Less样式---${outLess}----清除成功`)
      fs.unlink(outPng, function (err) {
        !err && console.log(`雪碧图---${outPng}----清除成功`)
        that.build()
      })
    })
  },
  build: function () {
    console.log(`开始----构建雪碧图`)
    let sprites = []
    let listFile = function (filePath, relativePath) {
      relativePath = relativePath || ''
      var files = fs.readdirSync(filePath)
      if (!files.length) {
        return
      }
      for (var i = 0; i < files.length; i++) {
        var file = files[i]
        var itemPath = path.join(filePath, file)
        var stats = fs.lstatSync(itemPath)
        if (stats.isDirectory() === true) {
          listFile(itemPath, relativePath + file + '-')
        } else {
          if (file.endsWith('.png')) {
            sprites.push(itemPath)
          }
        }
      }
    }
    listFile(checkDir)

    if (sprites.length > 0) {
      let spritesmith = new Spritesmith()
      spritesmith.createImages(sprites, function (error, images) {
        let err = error
        if (err) {
          console.log(err)
          return false
        }
        let result = spritesmith.processImages(images, {
          padding: 5
        })
        result.image.pipe(fs.createWriteStream(path.join(outDir, 'sprite.png')))
        let css = `.icon {display: inline-block;background-repeat: no-repeat;vertical-align: top;background-image: url('../img/sprite.png')}`
        for (let key in result.coordinates) {
          let relativePath = key
            .toLocaleLowerCase()
            .substr(checkDir.length + 1)
            .replace(/[\._\\\/]/g, '-')
          relativePath = relativePath.replace(/-png/g, '-icon')
          css += `.${relativePath} {width:${result.coordinates[key].width}px;height:${
            result.coordinates[key].height
          }px; background-position: ${-result.coordinates[key].x}px ${-result.coordinates[key].y}px;}\n`
        }
        fs.writeFile(outLess, css, 'utf-8')
        console.log(`雪碧图----创建成功`)
      })
    } else {
      fs.writeFile(outLess, '', 'utf-8')
      console.log(`雪碧图----创建成功`)
    }
  }
}
let action = process.argv[2]
if (action && methods.hasOwnProperty(action)) {
  methods[action]()
} else {
  methods.init()
}
