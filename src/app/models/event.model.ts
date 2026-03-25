
import * as _ from 'lodash';
import { IEvent } from '../interfaces/ievent.interface';

import * as moment from 'moment';

export class Event implements IEvent {

    constructor(data) {
        _.set(this, 'data', data);
    }

    get id(): string {
        return _.get(this, 'data.id');
    }

    set id(value: string) {
        _.set(this, 'data.id', value);
    }

    get title(): string {
        return _.get(this, 'data.title');
    }

    set title(value: string) {
        _.set(this, 'data.title', value);
    }

    get start(): Date {
        return _.get(this, 'data.start');
    }

    set start(value: Date) {
        _.set(this, 'data.start', value);
    }

    get end(): Date {
        return _.get(this, 'data.end');
    }

    set end(value: Date) {
        _.set(this, 'data.end', value);
    }

    get duracion(): Date {
      return _.get(this, 'data.duracion');
    }

    set duracion(value: Date) {
        _.set(this, 'data.duracion', value);
    }


    get description(): string {
        return _.get(this, 'data.description');
    }

    set description(value: string) {
        _.set(this, 'data.description', value);
    }

    get className(): string {
        return _.get(this, 'data.className');
    }

    set className(value: string) {
      _.set(this, 'data.className', value);
    }

    get pacienteId(): string {
        return _.get(this, 'data.pacienteId');
    }

    set pacienteId(value: string) {
      _.set(this, 'data.pacienteId', value);
    }

    get conAgenda(): Boolean {
        return _.get(this, 'data.conAgenda');
    }

    set conAgenda(value: Boolean) {
        _.set(this, 'data.conAgenda', value);
    }

    get url(): string {
        return _.get(this, 'data.url');
    }

    set url(value: string) {
        _.set(this, 'data.url', value);
    }

    getData() {
        return _.get(this, 'data');
    }

}
