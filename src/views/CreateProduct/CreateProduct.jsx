function CreateProduct() {

    return <div className="container mt5">
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Name</span>
            <input type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">Brand</span>
            <input type="text" className="form-control" placeholder="Brand" aria-label="Brand" aria-describedby="basic-addon2" />
        </div>

        <div className="d-flex flex-row mb-1">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" for="defaultCheck1">
                    category name1
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                <label className="form-check-label" for="defaultCheck2">
                    category name2
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" for="defaultCheck1">
                    category name3
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                <label className="form-check-label" for="defaultCheck2">
                    category name4
                </label>
            </div>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">Price: $</span>
            <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
        </div>

        <div className="input-group">
            <span className="input-group-text">Description</span>
            <textarea className="form-control" aria-label="With textarea"></textarea>
        </div>
    </div>
}

export default CreateProduct;