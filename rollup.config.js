import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/scripts/main.js',
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    babel({
      compact: true,
      presets: [
        ['es2015', {modules: false}]
      ]
    }),
    uglify()
  ],
  format: 'cjs',
  dest: 'build/scripts/main.js' // equivalent to --output
};
