export function animate(options: any) {
  var start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction от 0 до webpack.config.js
    var timeFraction = (time - start) / options.duration;
    if (timeFraction > 1) timeFraction = 1;

    // текущее состояние анимации
    var progress = options.timing(timeFraction);

    options.draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}
