/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
import type { SafeString } from '@ember/template/-private/handlebars';
import Formatter from './-base';
import { IntlShape, MessageDescriptor } from '@formatjs/intl';
import { PrimitiveType } from 'intl-messageformat';
declare type MessageFormatOptions = Record<string, PrimitiveType>;
/**
 * @private
 * @hide
 */
export default class FormatMessage extends Formatter<any> {
    static readonly type = "message";
    format(intl: IntlShape<string>, stringOrDesc: string, options: MessageFormatOptions & {
        htmlSafe: true;
    }): SafeString;
    format(intl: IntlShape<string>, stringOrDesc: MessageDescriptor, options?: MessageFormatOptions & {
        htmlSafe: boolean;
    }): SafeString;
}
export {};