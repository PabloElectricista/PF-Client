function Ordercomponent() {

    return <div className="d-flex align-items-center m-2" >
        <div className="row">
            <div className="col">
                <p>
                    <button
                        className="btn btn-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseWidthExample1"
                        aria-expanded="false"
                        aria-controls="collapseWidthExample1"
                    >
                        order
                    </button>
                </p>
            </div>
            <div className="col px-3 mx-3">
                <div className="row">
                    <div className="col collapse  collapse-horizontal" id="collapseWidthExample1">
                        <div className="card card-body">
                            <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>by name</option>
                                <option value="1">A to Z</option>
                                <option value="2">Z to A</option>
                            </select>
                        </div>
                    </div>
                    <div className="col collapse  collapse-horizontal" id="collapseWidthExample1">
                        <div className="card card-body">
                            <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>by price</option>
                                <option value="1">more to less</option>
                                <option value="2">less to more</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Ordercomponent;