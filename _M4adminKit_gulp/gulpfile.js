/**
 * TRP gulp setting
 * Copyright 2023, toughrain@gmail.com
 * "nodeVersion": "14.21.0",
 **/
const fs = require('fs');
const gulp = require("gulp");
const ejs = require("gulp-ejs");
const htmlbeautify = require('gulp-html-beautify');
const rename = require('gulp-rename');

var beatifyOptions = {
  indentSize: 4,
  indent_with_tabs: false
};



const filePath = "./src/guide/path_list.js"
const copy     = "./static/guide/path_list.js"
function gulpEjs() {
  //return gulp
  //.src("./src/*.ejs")
  fs.copyFile(filePath, copy, (error) => {
    if (error) {
      throw error
    } else {
      console.log('path_list.js == COPY. OK.')
    }
  })


  return gulp.src(['./src/**/*.ejs', '!' + './src/include/*.ejs'], {
    base: './src/'
  })
  .pipe(ejs({
    title: 'gulp-ejs'
  }))
  .pipe(rename({
    extname: '.html'
  }))
  .pipe(htmlbeautify(beatifyOptions))
  .pipe(gulp.dest("./static"))
};


function watch() {
  gulp.watch(["./src/**/*.*"], gulp.series(gulpEjs));
}

//gulp.task( "default", gulp.parallel("gulpEjs") );
gulp.task('default', gulp.series(gulpEjs, watch));