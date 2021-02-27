export function soundsStop(mas) {
  mas.forEach( (elem) => {
    elem.pause();
  })
}

