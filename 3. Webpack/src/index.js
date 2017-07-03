import _ from 'lodash';
import './style/main.css';
import Library from './library';
import TestImage from './img/test.png';

if (module.hot) {
  module.hot.accept('./library', function() {
    console.log('Accepting the updated library module!');
    Library.log();
  })
}

function component() {
  const element = document.createElement('div');
  const myImage = new Image()

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  myImage.src = TestImage;

  element.appendChild(myImage)

  return element;
}

document.body.appendChild(component());
