function Filterscomponent() {

    return <div>
        <p>
            <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseWidthExample"
                aria-expanded="false"
                aria-controls="collapseWidthExample"
            >
                Filters
            </button>
        </p>
        <div style={{ width: "100px;" }}>
            <div className="collapse  collapse-horizontal" id="collapseWidthExample">
                <details><summary id="name">by name</summary>
                    <div className="card card-body" style={{ width: "200px;" }}>
                        <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </details>
                <details><summary id="brand">by brand</summary>
                    <div className="card card-body" style={{ width: "200px;" }}>
                        <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </details>
            </div>
        </div>
    </div >
}

export default Filterscomponent;