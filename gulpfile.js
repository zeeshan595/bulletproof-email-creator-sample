const config = {
  input: "src",
  output: "dist",
  main: "index.js"
};

const gulp = require("gulp");
const ts = require("gulp-typescript");
const run = require("gulp-run");
const tsCompiler = ts.createProject({
  target: "es5",
  declaration: false,
  noImplicitAny: false,
  rootDir: config.input,
  outDir: config.output
});

gulp.task("default", gulp.series(() => {
  return gulp
    .src(config.input + "/**/*.ts")
    .pipe(tsCompiler())
    .pipe(gulp.dest(config.output));
}, () => {
  return run("node " + config.output + "/" + config.main).exec();
}));
