import commandFactory from '../factory/command';
import consts from '../consts';

const {commandNames} = consts;

const command = {
    name: commandNames.BRING_FORWARD,

    execute(graphics, id) {
        const target = this.getObject(id);
        this.undoData.object = target;
        graphics.getCanvas().bringForward(target);
    },

    undo(graphics) {
        graphics.getCanvas().sendBackwards(this.undoData.object);
    }
};

commandFactory.register(command);

module.exports = command;
