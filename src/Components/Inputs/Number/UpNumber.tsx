﻿// Imports
import * as React from 'react'
import { UpInputProps } from '../Input/'
import { InputBaseComponent } from '../_Common/BaseControl/BaseControl'
import { FilterProps } from '../../../Common/utils/types'
import { UpNumberProps, UpNumberStyledProps } from './'

import { NumericInput } from '@blueprintjs/core'

// Exports
export default class UpNumber extends InputBaseComponent<UpNumberProps, number | string> {
    public static defaultProps = {
        decimalPlace: 2,
        showError: true
    };

    constructor(p, c) {
        super(p, c);
        this.state = {
            value: p.value
        }
    }


    round = (value, decimals) => {
        decimals = Math.abs(parseInt(decimals)) || 0;
        var multiplier = Math.pow(10, decimals);
        return Math.round(value * multiplier) / multiplier;
    }

    handleNumericChange = (valueAsNumber: number, valueAsString: string) => {
        var _value = valueAsNumber;
        //var _newState:any = {
        //    value : (this.props.decimalPlace===0)?valueAsNumber:valueAsString
        //}
        //if (this.props.decimalPlace) {
        //    var _newValue = this.round(_value, this.props.decimalPlace);
        //    if (_newValue !== _value) {
        //        _newState = { 
        //            value: _newValue
        //        };
        //        _value = _newValue;
        //    }
        //}
        //this.setState(_newState);
        this.handleChangeEvent(valueAsString);
    }

    onChange(value) {
        return value;
    }

    renderControl() {
        const {isRequired, onChange, readonly, decimalPlace, stepSize, value, tooltip} = this.props;

        return (
            <NumericInput 
                value= { this.state.value }
                stepSize={stepSize}
                majorStepSize={stepSize ? stepSize + 10 : 10}
                onValueChange={this.handleNumericChange}
                minorStepSize={1 / (Math.pow(10, this.props.decimalPlace))}
            >
            </NumericInput>

        );
    }
}