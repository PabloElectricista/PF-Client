import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useDispatch } from 'react-redux';
import { setfilter } from '../../redux/slices/filterSlice'
import { useEffect } from "react";

export default function SearchBox() {

    const dispatch = useDispatch()
    const [query, setQuery] = useState("");
    let [close, setClose] = useState(false)

    useEffect(() => {
        let searchstate = localStorage.getItem("searchState")
        let text = (searchstate === null || searchstate === undefined) ? "" : searchstate
        setQuery(text)
        setClose(localStorage.getItem("searchcloseState"))
    }, [])

    useEffect(() => {
        if (query === undefined || query === "") {
            localStorage.setItem("search", "")
            localStorage.setItem("searchState", "")
        } else {
            localStorage.setItem("search", `&name=${query}`)
            localStorage.setItem("searchState", query)
        }
    }, [query])

    const submitHandler = (e) => {
        e.preventDefault();
        if (query === "") return
        dispatch(setfilter({ search: true }))
        setClose(true)
        localStorage.setItem("searchcloseState", true)
    };

    const handleClear = e => {
        e.preventDefault();
        setQuery("")
        setClose(false)
        localStorage.setItem("searchcloseState", false)
        dispatch(setfilter({ search: false }))
    }

    return (
        <Form className="d-flex me-auto" onSubmit={submitHandler}>
            <InputGroup>
                <Button
                    size="sm"
                    className={close ? "visible" : "invisible"}
                    variant="danger"
                    onClick={handleClear}
                >x</Button>
                <FormControl
                    type="text"
                    name="q"
                    id="q"
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="search products..."
                    aria-label="Search Products"
                    aria-describedby="button-search"
                    value={query}
                ></FormControl>

                <Button variant="outline-primary" type="submit" id="button-search">
                    <i className="fas fa-search"></i>
                </Button>
            </InputGroup>
        </Form>
    );
}
