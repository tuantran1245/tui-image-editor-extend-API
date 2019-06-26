import commandFactory from '../factory/command';
import consts from '../consts';

const {commandNames} = consts;

const command = {
    name: commandNames.SEND_BACKWARD,

    execute(graphics, id) {
        const target = this.getObject(id);
        this.undoData.object = target;
        graphics.getCanvas().sendBackwards(target);
    },

    undo(graphics) {
        graphics.getCanvas().bringForward(this.undoData.object);
    }
};

commandFactory.register(command);

module.exports = command;
