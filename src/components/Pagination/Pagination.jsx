/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProds } from "../../redux/actions/products";

function Pagination() {

    const dispatch = useDispatch()
    const { count } = useSelector(state => state.products)
    const [pages, setPages] = useState([])
    const [current, setCurrent] = useState(2)
    const [max, setMax] = useState(1)

    useEffect(() => {
        dispatch(getProds(current - 1))
    }, [current])

    useEffect(() => {
        if (count) {
            const maxpages = Math.ceil(count / 9);
            var numbers = []
            for (let i = 1; i <= maxpages; i++) {
                numbers.push(i);
            }
            setPages(numbers)
            setMax(maxpages)
        }
    }, [count])

    return <div className="d-flex justify-content-center">
        <nav aria-label="...">
            <ul className="pagination">
                <li className={current === 1 ? "page-item disabled" : "page-item"}>
                    <a className="page-link" href="#" onClick={() => setCurrent(current - 1)}>Previous</a>
                </li>
                {pages && pages.length > 0 ? pages.map(page => {
                    return <li className={current === page ? "page-item active" : "page-item"}
                        aria-current={current === page ? "page" : ""}
                    >
                        <a className="page-link" href="#" onClick={() => setCurrent(page)}>{page}
                        </a>
                    </li>
                }) : null}
                <li className={current === max ? "page-item disabled" : "page-item"}>
                    <a className="page-link" href="#" onClick={() => setCurrent(current + 1)}>Next</a>
                </li>
            </ul>
        </nav>
    </div>
}

export default Pagination;
