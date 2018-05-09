
import './style.css';
import printMe from './print'
import { cube } from './math.js';

const render = function () {
    printMe();
    console.log(cube(5))
}
render()

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}