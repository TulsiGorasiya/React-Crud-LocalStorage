import React from 'react'

const Data = (items, removeItem, editItem) => {
    return (
        <div className='container'>
            {console.log('ffggggg', items)}
            {/* {items.items.length == 0 ? <>no data </> : */}
            <>
                {items?.items?.map((item) => {
                    const { id, title } = item;
                    return (
                        <ul className="list-group list-group-flush" key={id} >
                            <li className="list-group-items d-flex justify-content-between align-items-center">
                                {title}
                                <div style={{ float: "right" }}>
                                    <button type="button" className="edit-btn" onClick={() => items.editItem(id)}>
                                        Edit
                                    </button>
                                    <button type="button" className="delete-btn" onClick={() => items.removeItem(id)}>
                                        Delete
                                    </button>
                                </div>
                            </li>
                        </ul>
                    );

                })}
            </>
            {/* } */}

        </div>
    )
}

export default Data

