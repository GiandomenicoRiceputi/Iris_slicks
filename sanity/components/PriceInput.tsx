import * as React from 'react';
// @ts-ignore
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

function createPatchFrom(value) {
   return PatchEvent.from(value === '' ? unset() : set(Number(value)))
}

const formatMoney = Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
}).format

const PriceInput = ({ type, value, onChange, inputComponent }) => {
    return (
        <div>
            <h2>{type.title} - {value ? formatMoney(value) : ''}</h2>
            <p>{type.description}</p>
            <input
                type={type.name}
                value={value}
                onChange={event => onChange(createPatchFrom(event.target.value))}
            ref={inputComponent}
            />
        </div>
    );
};

PriceInput.focus = function() {
    this._inputElement.focus()
}

export default PriceInput;
