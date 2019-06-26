import commandFactory from '../factory/command';
import consts from '../consts';

const {commandNames} = consts;

const command = {
    name: commandNames.SEND_TO_BACK,

    execute(graphics, id) {
        const target = this.getObject(id);
        this.undoData.object = target;
        graphics.getCanvas().sendToBack(target);
    },

    undo(graphics) {
        graphics.getCanvas().bringToFront(this.undoData.object);
    }
};

commandFactory.register(command);

module.exports = command;

