import { Peripheral } from 'raspi-peripheral';
export interface IConfig {
    pin: number | string;
    frequency?: number;
    range?: number;
}
export declare class SoftPWM extends Peripheral {
    private _pwm;
    private _frequency;
    private _range;
    private _dutyCycle;
    readonly frequency: number;
    readonly range: number;
    readonly dutyCycle: number;
    constructor(config: number | string | IConfig);
    write(dutyCycle: number): void;
}
