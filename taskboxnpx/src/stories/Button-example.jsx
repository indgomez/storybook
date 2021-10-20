import React from 'react';
import Button from '../../../src/components/button/button';

export default function ButtonExample({ textButton, borderButton, background }) {
    return (
        <Button textButton={textButton} borderButton={borderButton} background={background} ></Button>
    );
}