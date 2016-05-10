'use strict'

const gulp = require('gulp')
const responsive = require('gulp-responsive')


// helper functions

const parseSize = (o) => {

  // o = original string
  // d = dimention string
  // q = quantity i.e. value

  let d = o.substr(-1)
  const q = parseFloat(o)

  if (d === 'w')
    d = 'width'
  else
    d = 'height'

  return {d, q, o}

}

const getImgObj = (format, quality, size) => {
  return {
    format, quality,
    [size.d]: size.q
  }
}

const mkimgconf = (...sizes) => {

  const quality = sizes.pop()

  const images = []

  sizes
    .map(parseSize) // parse the image size string into an object
    .map(size => {
      const imgobj = (format) => getImgObj(format, quality, size)
      return [imgobj('jpeg'), imgobj('webp')]
    })
    .forEach(i => images.push(...i)) // collect all the image sets into one array

  return images

}

const imgConf = {
  'card/**/*':         mkimgconf('480h', 90),
  'fullscreen/**/*':   mkimgconf('800h', 80),
  'gallerythumb/**/*': mkimgconf('427w', 80),
  'widepano/**/*':     mkimgconf('300h', 80),
}

console.log(imgConf)

gulp.task('img', () => {
  gulp.src('src/img/**/*')
    .pipe(responsive(imgConf))
  .pipe(gulp.dest('public/img'))
})
