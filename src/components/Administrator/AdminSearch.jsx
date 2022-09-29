import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

function AdminSearch({select}) {

    return <div>
        <Form className="mx-5 w-50" /* onSubmit={submitHandler} */>
            {/* <Button
                size="sm"
                // className={close ? "visible" : "invisible"}
                variant="danger"
                // onClick={handleClear}
            >x</Button> */}
            <InputGroup>
                <FormControl
                    size="sm"
                    type="text"
                    name="name"
                    id="name"
                    // ref={current}
                    onChange={(e) => {
                        // setClose(true)
                        localStorage.setItem("search", `&name=${e.target.value}`)
                    }}
                    placeholder="search ..."
                    aria-label="Search "
                    aria-describedby="button-search"
                ></FormControl>

                <Button
                    variant="outline-primary" type="submit" id="button-search">
                    <i className="fas fa-search"></i>
                </Button>
            </InputGroup>
        </Form>
    </div>
}

export default AdminSearch;