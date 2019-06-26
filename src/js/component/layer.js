import Component from '../interface/component';
import consts from '../consts';

class Layer extends Component {
    constructor(graphics) {
        super(consts.componentNames.LAYER, graphics);
    }
}

module.exports = Layer;
