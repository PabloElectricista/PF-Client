import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useDispatch } from 'react-redux';
import { setfilter } from '../../redux/slices/filterSlice'

export default function SearchBox() {

    const [query, setQuery] = useState("");
    const dispatch = useDispatch()
    let [close, setClose] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault();
        if(query === "") return
        dispatch(setfilter({ name: query }))
        setClose(true)
    };

    const handleClear = e => {
        e.preventDefault();
        setQuery("")
        setClose("")
        dispatch(setfilter({ name: "" }))
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
