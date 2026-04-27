import React from 'react'
import { DataContext } from './DataContext'
import ComponentB from './ComponentB'

function ComponetA() {
    const message = "Hello From Component AAAAA";
    return (
        <div>
            This is the Component A
            <DataContext.Provider value={message}>
                <ComponentB />
            </DataContext.Provider>
        </div>
    );
}

export default ComponetA