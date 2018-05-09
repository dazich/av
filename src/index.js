
import './style.css';
import printMe from './print'
import { cube } from './math.js';

const render = function () {
    // import(/* webpackChunkName: "print" */ './print').then(f => f()) // 這種好像都會把模塊分離出去
    console.log(cube(5))
}
render()

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        // printMe();
    })
}