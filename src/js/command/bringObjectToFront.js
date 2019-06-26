import commandFactory from '../factory/command';
import consts from '../consts';

const {commandNames} = consts;

const command = {
    name: commandNames.BRING_TO_FRONT,

    execute(graphics, id) {
        const target = this.getObject(id);
        this.undoData.object = target;
        graphics.getCanvas().bringToFront(target);
    },

    undo(graphics) {
        graphics.getCanvas().sendToBack(this.undoData.object);
    }
};

commandFactory.register(command);

module.exports = command;
