/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useDispatch } from 'react-redux';
import { getProds } from '../../redux/actions/products';
import { closeinitial } from '../Filters/Filters'

export default function SearchBox() {

    let current = useRef(null)
    const dispatch = useDispatch()
    let [close, setClose] = useState(false)

    useEffect(() => {
        let searchcloseState = localStorage.getItem("searchcloseState")
        if (searchcloseState !== null && searchcloseState !== undefined) setClose((searchcloseState === "false") ? false : true)
        
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        let query = localStorage.getItem("search")
        if (query === "" || query === null) return
        localStorage.setItem("pagestate", 1)
        localStorage.setItem("page", 0)
        localStorage.setItem("searchcloseState", true)
        localStorage.setItem("queryfilterstate", JSON.stringify({}))
        localStorage.setItem("closefilterstate", JSON.stringify(closeinitial))
        dispatch(getProds())
        console.log("entro en Search submit");
    };

    const handleClear = e => {
        e.preventDefault();
        current.current.value = ""
        setClose(false)
        localStorage.setItem("searchcloseState", false)
        localStorage.setItem("search", "")
        dispatch(getProds())
    }

    return (
        <Form className="d-flex me-auto w-50" onSubmit={submitHandler}>
            <Button
                size="sm"
                className={close ? "visible" : "invisible"}
                variant="danger"
                onClick={handleClear}
            >x</Button>
            <InputGroup>
                <FormControl
                    size="sm"
                    type="text"
                    name="name"
                    id="name"
                    ref={current}
                    onChange={(e) => {
                        setClose(true)
                        localStorage.setItem("search", `&name=${e.target.value}`)
                    }}
                    placeholder="search products..."
                    aria-label="Search Products"
                    aria-describedby="button-search"
                ></FormControl>

                <Button
                    variant="outline-primary" type="submit" id="button-search">
                    <i className="fas fa-search"></i>
                </Button>
            </InputGroup>
        </Form>
    );
}
