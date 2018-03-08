const gulp = require("gulp")

gulp.task("hello",()=>{
	console.log("hello world")
})

gulp.task("hello2",()=>{
	console.log("hello world!!!!")
})

gulp.task("images",()=>{
	gulp.src("src/images/*.png")
	.pipe(gulp.dest("dist/images/"))
})


const scss = require("gulp-sass")

gulp.task("scss",()=>{
	gulp.src("src/scss/app.scss")
	.pipe(scss().on('error', scss.logError))
	.pipe(gulp.dest("dist/css/"))
})

const pug = require("gulp-pug")

gulp.task("pug",() => {
	gulp.src("src/tmpl/*.pug")
	.pipe(pug({
		pretty: true
	}))
	.pipe(gulp.dest("dist"))
})

gulp.task('watch', function(){
	gulp.watch('./src/scss/*.scss', ["scss"]);
	gulp.watch('./src/tmpl/*.pug', ["pug"]);
})

gulp.task('build', ['scss', 'pug', 'images']);
