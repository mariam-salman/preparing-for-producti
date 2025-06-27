 import gulp from 'gulp';
import shell from 'gulp-shell';
import { exec } from 'child_process';

gulp.task('parcel', shell.task('npx parcel build src/index.html --dist-dir dist'));

gulp.task('serve', shell.task('npx parcel src/index.html --port 1234'));

gulp.task('wait', (done) => {
  console.log('⌛ Waiting for server to be ready...');
  setTimeout(done, 5000);
});

gulp.task('cypress', gulp.series('serve', 'wait', shell.task('npx cypress run --browser chrome')));

gulp.task('test', shell.task('npx mocha'));

gulp.task('default', gulp.series('serve'));
