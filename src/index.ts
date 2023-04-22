import { ITime } from "@itsjusttriz/utils";

export enum ANSIColors {
    GREEN = '\x1b[1;32m',
    RED = '\x1b[1;31m',
    YELLOW = '\x1b[1;33m',
    BLUE = '\x1b[1;34m',
    PURPLE = '\x1b[1;35m',
    PINK = '\x1b[1;95m',


    RESET = '\x1b[0;0m',
    DEBUG = '\x1b[2;37;41m'
};

export type LoggerProps = {
    includeTimestamp?: boolean;
    separator?: string;
    customPrefix?: string;
};

export class Logger {
    private _includeTimestamp: boolean;
    private _separator: string;
    private _customPrefix: string;

    constructor(opts?: LoggerProps) {
        this._includeTimestamp = opts?.includeTimestamp ?? true;
        this._separator = opts?.separator ?? '|';
        this._customPrefix = opts?.customPrefix ?? '[ijtdev/logger]';
    }

    success(...input: any[]) {
        const _input = input.map(line => `${ANSIColors.GREEN}${line}${ANSIColors.RESET}`);
        this.log('GREEN', ..._input);
    }

    error(...input: any[]) {
        const _input = input.map(line => `${ANSIColors.RED}${line}${ANSIColors.RESET}`);
        this.log('RED', ..._input);
    }

    info(...input: any[]) {
        const _input = input.map(line => `${ANSIColors.YELLOW}${line}${ANSIColors.RESET}`);
        this.log('YELLOW', ..._input);
    }

    log(color: keyof typeof ANSIColors = 'RESET', ...input: any[]) {
        const _init = this.basicLogArray();
        console.log(ANSIColors[color], ..._init, this._separator, input.join(` ${this._separator} `));
    }

    setPrefix(prefix: string) {
        this._customPrefix = prefix;
        return this;
    }

    private basicLogArray() {
        const _input = [];
        if (this._includeTimestamp)
            _input.push(ITime.formatNow('short'));
        if (this._customPrefix)
            _input.push(this._customPrefix);
        return _input;
    }
};