
import { keysDescription } from '../index';

export class DrumKeys {

    keyNumber = null;
    keyValue = null;
    sound = null;

    constructor( keyNumber ) {
        this.keyNumber = keyNumber;
        this.keyValue = DrumKeys.assignValue(this.keyNumber, keysDescription);
        this.sound = DrumKeys.assignSound(this.keyNumber, keysDescription);
    }

    static assignValue( keyNumber, keyValues ) {
        if ( keyNumber >= keyValues.length ) {
            return null;
        } else {
            return keyValues[keyNumber];
        }
    }

    static assignSound( keyNumber, keyValues ) {
        if ( keyNumber >= keyValues.length ) {
            return null;
        } else {
            return `${(keyValues[keyNumber]).toLowerCase()}.wav`;
        }
    }

}