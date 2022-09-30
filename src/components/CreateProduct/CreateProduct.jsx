import React, { useState } from 'react';
import { postProds } from '../../redux/actions/products';
import { useDispatch } from 'react-redux';
import style from "./CreateProduct.module.css";
import { toast } from "react-toastify";

export default function CreateProduct() {
    
    const dispatch = useDispatch()
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        name: "",
        images: [], 
        price: 0, 
        description: "", 
        stock: 1, 
        category: "", 
        brand: "", 
        colors: [],
        summary: ""
    })

    console.log('inputImaaaaageeeee', input.images)

    function validate(input) {
        let errors = {};

        if (!input.name) {
            errors.name = 'Coloca un nombre al producto.';
        }
        // if (!input.images) {
        //     errors.images = 'Coloca una imagen al producto.';
        // }

        if (!input.price || !/^[1-9]\d*(\.\d+)?$/.test(input.price)) { 
            errors.price = 'Coloca un precio al producto mayor a 0.';
        }
        if (!input.description) {
            errors.description = 'Coloca una descripción al producto.';
        }
        // if(!input.category){ 
        //     errors.category = 'Coloca una categoria al producto.';
        // }
        if (!input.stock || !/^[0-9]\d*(\.\d+)?$/.test(input.stock)) { 
            errors.stock = 'Coloca un numero, cero o más.';
        }
        if (!input.brand) {
            errors.brand = 'Coloca una marca al producto.';
        }

        if (!input.colors) { 
            errors.colors = 'Coloca un color.';
        }
        if (!input.summary) { 
            errors.summary = 'Coloca una descripción';
        }
        

        return errors

    }
    
    function handleSubmit(e) {
        e.preventDefault()
        if (input.name.length > 1
            && !errors.hasOwnProperty("name") //devuelve un buleano si el objeto tiene la propiedad especificada 
            && !errors.hasOwnProperty("images")
            && !errors.hasOwnProperty("price")
            && !errors.hasOwnProperty("description")
            && !errors.hasOwnProperty("brand")
            && !errors.hasOwnProperty("summary")
            && input.category !== "All"
            && input.category
            && !errors.hasOwnProperty("stock")
            && !errors.hasOwnProperty("colors")
        ) 
        {
            dispatch(postProds(input,localStorage.getItem('tkn')))
            toast("Producto creado con exito", {
                type: "success",
                autoClose: 2000
              })
            setInput({
                name: "",
                images: "",
                price: 0,
                description: "",
                category: "",
                stock: 1,
                brand: "",
                summary: "",
                colors: "",
            })
        }
        else {
            toast("Debe completar correctamente todos los campos con asteriscos (*)", {
                type: "warning",
                autoClose: 2000
              })

        }
    }


    function handleChange(e) {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value

        }));
        //console.log (input)
    }
    

    function handleCheck(e) {
        if (e.target.value === "All") {
            setErrors(validate({
                ...input,
                [e.target.name]: e.target.value

            }));
            //console.log (input)
        }

        else {
            setInput({
                ...input,
                category: e.target.value
            })
        }
    }

    async function handleImageChange(e){
        if (e.target.files && e.target.files[0]) {
            console.log(e.target.files[0])
            const data = new FormData()
            data.append("file", e.target.files[0])
            data.append("upload_preset", "bx6aojc3")
            fetch (
                "https://api.cloudinary.com/v1_1/dyjgtikqw/upload", {
                 method: "POST",
                 body: data
                 // mode: 'no-cors'
                }
            ).then(resp => resp.json())
                    .then(file => {
                        if(file) {
                            setInput({
                        ...input,
                        images: `${file.secure_url}`
                        })
                    }
                    })
        }
    }
    
    return (
        <div className={style.container}>

            <form className={style.contenedor} onSubmit={(e) => handleSubmit(e)} >
                <div>
                    <input
                        maxLength = "80"
                        className={style.input}
                        placeholder="Nombre del Producto: (*)"
                        autoComplete="off"
                        type="text"
                        value={input.name}
                        name="name"
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.name && (<p className={style.error}>{errors.name}</p>)}
                </div>
                <div><br />
                        <input 
                        className={style.input} 
                        name="images" 
                        type="file" 
                        onChange={handleImageChange}
                        />
                    {errors.images && (<p className={style.error}>{errors.images}</p>)}
                </div>
                
                <div><br />
                    <input
                        className={style.input}
                        autoComplete="off"
                        type="number"
                        value={input.price}
                        name='price'
                        placeholder="Precio del producto: (*)"
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.price && (<p className={style.error}>{errors.price}</p>)}
                </div>

                <div><br />
                    <input
                        className={style.input}
                        autoComplete="off"
                        type="text"
                        value={input.summary}
                        name='summary'
                        placeholder="Summary:          (*)"
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.summary && (<p className={style.error}>{errors.summary}</p>)}
                </div>

                
                <div><br />
                    <input
                        className={style.input}
                        autoComplete="off"
                        type="number"
                        value={input.stock}
                        name='stock'
                        placeholder="Stock del producto: (*)"
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.stock && (<p className={style.error}>{errors.stock}</p>)}<br />
                </div>

                <div><br />
                    <input
                        className={style.input}
                        autoComplete="off"
                        type="text"
                        value={input.brand}
                        name='brand'
                        placeholder="Marca del producto: (*)"
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.brand && (<p className={style.error}>{errors.brand}</p>)}<br />
                </div>
                <div><br />
                    <input
                        className={style.input}
                        autoComplete="off"
                        type="text"
                        value={input.colors}
                        name='colors'
                        placeholder="Color del producto: (*)"
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.colors && (<p className={style.error}>{errors.colors}</p>)}<br />
                </div>
                <div><br />
                    
                        <textarea 
                        className={style.input}
                        placeholder="Descripción: (*)"
                        // autoComplete="off"
                        type="text"
                        value={input.description}
                        name="description"
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.description && (<p className={style.error}>{errors.description}</p>)}
                </div>

                <br />
                <select onChange={e => handleCheck(e)} value={input.category} className={style.category} >

            
                    <option value="All" hidden>Elige una categoria</option>

                    <option value="Auriculares">Auriculares</option>
                    <option value="Fuente de alimentación">Fuente de alimentación</option>
                    <option value="Gabinete">Gabinete</option>
                    <option value="HDD">HDD</option>
                    <option value="Micro-procesador">Micro-procesador</option>

                    <option value="Micrófono">Micrófono</option>
                    <option value="Monitor">Monitor</option>
                    <option value="MotherBoard">MotherBoard</option>
                    <option value="Mouse">Mouse</option>
                    <option value="Mousepad">Mousepad</option>

                    <option value="M.2NVme">M.2NVme</option>
                    <option value="Parlante">Parlante</option>
                    <option value="Placa de video">Placa de video</option>
                    <option value="RAM">RAM</option>
                    <option value="Refrigeración">Refrigeración</option>

                    <option value="Sillas">Sillas</option>
                    <option value="SSD">SSD</option>
                    <option value="Teclados">Teclados</option>
                    <option value="Webcam">Webcam</option>


                    {errors.category && (<p className={style.error}><p className="error" >{errors.category}</p></p>)}
                </select> <br /> <br />



                <button className={style.boton1} type='submit'>Crear Producto</button>
                <br /><br />
            
            </form>
            
        </div>
    )




}

