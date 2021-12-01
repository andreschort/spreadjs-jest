/* global GC */
import React, { useRef } from 'react'

export default function Designer() {
    const ref = useRef(null);

    function initDesigner(node) {
        if (node) {
            ref.current = new GC.Spread.Sheets.Designer.Designer(node);
        }
        else {
            ref.current.destroy();
            ref.current = null;
        }
    }

    return (
        <div ref={initDesigner}>
        </div>
    )
}
