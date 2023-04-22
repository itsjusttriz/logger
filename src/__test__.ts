import { Logger } from '.';

const logger1 = new Logger();
const logger2 = new Logger({
    customPrefix: '[Logger/Testing]',
    includeTimestamp: false,
    separator: '~'
});

(() => {
    logger1.log(undefined, 'This is the default logger configuration.');
    logger1.info('This is the method most used when you want something non-urgent to be more notice-able.');
    logger1.success('This is the method used when you want to present a process that has been completed, successfully... or just green, yknow?');
    logger1.error('Take a guess! ;)');

    logger2.log(undefined, 'Oh look, this one doesn\'t have a timestamp, but it has a custom separator AND a cool prefix!');
    logger2.info('Same as before, but with new configuration...');
    logger2.success('Same again...');
    logger2.error('Nope, nothing\'s changed since 1 second ago xD');
})();