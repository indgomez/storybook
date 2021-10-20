import React from 'react';

export default function Button({ textButton, borderButton, background }) {
    return (
      <button style={{backgroundColor: background, borderRadius: borderButton}} className="button" >{textButton}</button>
    );
}
 