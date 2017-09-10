'use strict';

const chalk = require('chalk');
const COLORS = {
    BLUE: 'blue',
    GREEN: 'green',
    RED: 'red',
    YELLOW: 'yellow',
    WHITE: 'white',
    CYAN: 'cyan'
};

class Messenger {
    static getColors() {
        return COLORS;
    }

    static createMessage(message, color, logFunction) {
        logFunction = logFunction || console.log;

        logFunction(this.colorize(message, color));
    }

    static success(message) {
        this.createMessage(message, this.getColors().GREEN);
    }

    static log(message) {
        this.createMessage(message, this.getColors().WHITE);
    }

    static warning(message) {
        this.createMessage(message, this.getColors().YELLOW, console.warn);
    }

    static error(message) {
        this.createMessage(message, this.getColors().RED, console.error);
    }

    static getChalk() {
        return chalk;
    }

    static colorize(message, color) {
        color = color || this.getColors().WHITE;

        if (typeof this.getColors()[color.toUpperCase()] === 'undefined') {
            color = this.getColors().WHITE;
        }

        try {
            return this.getChalk()[color.toLowerCase()](message);
        } catch (e) {
            return this.getChalk()[this.getColors().WHITE](message);
        }
    }
}

module.exports = Messenger;