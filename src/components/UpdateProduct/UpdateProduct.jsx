import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import style from './UpdateProduct.module.css';
import { updateProduct } from '../../redux/actions/products';
import {useLocation, useNavigate} from "react-router-dom";
import { getProdsById } from '../../redux/actions/products';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from "react-router-dom";
import { useSnackbar } from 'notistack';

export default function UpdateProduct() {
 
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate ()
    const location = useLocation()
    let id = (location.pathname.substring(29,location.pathname.length)) 
    console.log('id >>>>>>>>>>',id)
    const dispatch = useDispatch()
    const [errors, setErrors] = useState({})

    const products = useSelector((state) => state.products.products);
    const update = products.find((x) => x._id === id);
    console.log('Este es el update>>>>>>>>>>>>',update)
     
    if (!update.name){
    dispatch(getProdsById(id))
    }

    const [input, setInput] = useState({
        user: {}, name: "", colors:[{}], category: [{}], images: [{}], brand: "", stock: 0, price: 0, summary: "", description: "", status: ["New"]
    })

    function validate(input) {
        let errors = {};

        if (!input.user) {
            errors.user = 'Coloca un usuario.';
        }
        if (!input.name) {
            errors.name = 'Coloca un nombre al producto.';
        }
        if (!input.colors) {
            errors.colors = 'Coloca un color al producto.';
        }
        if (!input.category) {
            errors.category = 'Coloca una categoria al producto.';
        }
        if (!input.images) {
            errors.images = 'Coloca una imagen al producto.';
        }
        if (!input.brand) {
            errors.brand = 'Coloca una marca al producto.';
        }
        if (!input.stock || !/^[0-9]\d*(\.\d+)?$/.test(input.stock)) { 
            errors.stock = 'Coloca un numero, cero o más.';
        }
        if (!input.price || !/^[1-9]\d*(\.\d+)?$/.test(input.price)) { 
            errors.price = 'Coloca un precio al producto mayor a 0.';
        }
        if (!input.summary) {
            errors.summary = 'Coloca un resumen del producto.';
        }
        if(!input.description){ 
            errors.description = 'Coloca una descripcón del producto.';
        }
        if (!input.status) {
            errors.status = 'Coloca un status del producto.';
        }

        return errors

    }
    
    useEffect(()=>(setInput({
        user: update.user,
        name: update.name,
        colors: update.colors,
        category: update.category,
        images: update.images,
        brand: update.brand,
        stock: update.stock,
        price: update.price,
        summary: update.summary,
        description: update.description,
        status: update.status,
      })),[update]
      )
  

    function handleSubmit(e) {
        e.preventDefault()

                
        if  (  input.user === update.user
            && input.name === update.name
            && input.colors === update.colors
            && input.category === update.category
            && input.images === update.images
            && input.brand === update.brand
            && input.stock === update.stock
            && input.price === update.price
            && input.summary === update.summary
            && input.description === update.description
            && input.status === update.status
         ){
             enqueueSnackbar("Debe modificar algún campo", { variant: 'error' }); 

         }
        else if (input.name.length === 0
            || errors.hasOwnProperty("user") //devuelve un buleano si el objeto tiene la propiedad especificada 
            || errors.hasOwnProperty("name")
            || errors.hasOwnProperty("colors")
            || errors.hasOwnProperty("category")
            || errors.hasOwnProperty("images")
            || errors.hasOwnProperty("brand")
            || errors.hasOwnProperty("stock")
            || errors.hasOwnProperty("price")
            || errors.hasOwnProperty("summary")
            || errors.hasOwnProperty("description")
            || errors.hasOwnProperty("status")
        ) {
             enqueueSnackbar("Debe completar correctamente todos los campos con asteriscos (*)", { variant: 'error' });
        }
        else {
            dispatch(updateProduct(update._id, input))
             enqueueSnackbar("Producto modificado con exito", { variant: 'success' });
             setTimeout(() => {
                navigate('/admin/products')
            }, 2000);
           
        }
                
    }


    function handleChange(e) {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    }

    function handleStatus(e) {
      
            setInput({
                ...input,
                status: e.target.value
            })
        
    }

    function handleCheck(e) {

            setInput({
                ...input,
                category: e.target.value
            })
    }  

    return (

        <div className={style.container}>
            
            <form  onSubmit={(e) => handleSubmit(e)} >

                <Box  sx={{'& .MuiTextField-root': { m: 1, width: '60ch', color: "white" },width: '62ch', my: "2%", mx: "30%", maxWidth: "100%", bgcolor:'#fff', borderRadius: "10px" }}>
                    <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '60ch', color: "white" }, maxWidth: "100%", bgcolor:'#fff', borderRadius: "10px" }} noValidate autoComplete="off">
   
                        <div>
                            <div>
                                <TextField sx={{ bgcolor:'#fff ', color: '#dee2e6',  borderRadius: "10px" }}
                                    id="outlined-helperText"
                                    label="Usuario: "
                                    maxlength = "70"
                                    htmlFor="user"
                                    value={input.user}
                                    name="user"
                                    onChange={(e) => handleChange(e)}
                                    helperText="Campo obligatorio (*)"
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                                {errors.user && (<p className={style.error}>{errors.user}</p>)}
                            </div>
                            <div>
                                <TextField sx={{ bgcolor:'#fff ', color: '#FFC400',  borderRadius: "10px" }}
                                    id="outlined-helperText"
                                    label="Nombre del producto:"
                                    htmlFor="name"
                                    value={input.name}
                                    onChange={(e) => handleChange(e)}
                                    name="name"
                                    helperText="Campo obligatorio (*)"
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                                {errors.name && (<p className={style.error}>{errors.name}</p>)}
                            </div>
                            <div>
                                <TextField sx={{ bgcolor:'#fff ', color: '#FFC400',  borderRadius: "10px" }}
                                    id="outlined-helperText"
                                    label="Color del producto:"
                                    htmlFor="colors"
                                    value={input.colors}
                                    onChange={(e) => handleChange(e)}
                                    name="colors"
                                    helperText="Campo obligatorio (*)"
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                                {errors.colors && (<p className={style.error}>{errors.colors}</p>)}
                            </div>
                            <div>
                                <TextField sx={{ bgcolor:'#fff ', color: '#FFC400',  borderRadius: "10px" }}
                                    id="outlined-number"
                                    label="Imagen del producto"
                                    htmlFor="images"
                                    value={input.images}
                                    onChange={(e) => handleChange(e)}                      
                                    name="images"
                                    helperText="Campo obligatorio (*)"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                {errors.images && (<p className={style.error}>{errors.images}</p>)}
                            </div>
                            <div>
                                <TextField sx={{ bgcolor:'#fff ', color: '#FFC400',  borderRadius: "10px" }}
                                    id="outlined-number"
                                    label="Marca del producto"
                                    htmlFor="brand"
                                    value={input.brand}
                                    onChange={(e) => handleChange(e)}                      
                                    name="brand"
                                    helperText="Campo obligatorio (*)"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                {errors.brand && (<p className={style.error}>{errors.brand}</p>)}
                            </div>
                            <div>
                                <TextField sx={{ bgcolor:'#fff ', color: '#FFC400',  borderRadius: "10px" }}
                                    id="outlined-number"
                                    label="Stock del producto"
                                    htmlFor="stock"
                                    value={input.stock}
                                    onChange={(e) => handleChange(e)}                      
                                    name="stock"
                                    type="number"
                                    helperText="Campo obligatorio (*)"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                {errors.stock && (<p className={style.error}>{errors.stock}</p>)}
                            </div>
                            <div>
                                <TextField sx={{ bgcolor:'#fff ', color: '#FFC400',  borderRadius: "10px" }}
                                    id="outlined-number"
                                    label="Precio del producto"
                                    htmlFor="price"
                                    value={input.price}
                                    onChange={(e) => handleChange(e)}                      
                                    name="price"
                                    type="number"
                                    placeholder="$"
                                    helperText="Campo obligatorio (*)"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                {errors.price && (<p className={style.error}>{errors.price}</p>)}
                            </div>
                            <div>
                                <TextField sx={{ bgcolor:'#fff ', color: '#FFC400',  borderRadius: "10px" }}
                                    id="outlined-number"
                                    label="Resumen del producto"
                                    htmlFor="summary"
                                    value={input.summary}
                                    onChange={(e) => handleChange(e)}                      
                                    name="summary"
                                    helperText="Campo obligatorio (*)"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                {errors.summary && (<p className={style.error}>{errors.summary}</p>)}
                            </div>
                            <div> 
                                <TextField sx={{ bgcolor:'#fff ', color: '#dee2e6',  borderRadius: "10px" }}
                                    textarea
                                    id="outlined-helperText"
                                    label="Descripción del producto: "
                                    maxlength = "100"
                                    htmlFor="description"
                                    value={input.description}
                                    name="description"
                                    onChange={(e) => handleChange(e)}
                                    helperText="Campo obligatorio (*)"
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                                {errors.description && (<p className={style.error}>{errors.description}</p>)}
                            </div>
                            <div >
                                <FormControl sx={{ m: 1, minWidth: 80, width: '97%', bgcolor:'#fff'}}>
                                    <InputLabel id="demo-simple-select-autowidth-label" >Categorias</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        value={input.category}
                                        autoWidth
                                        label="Category"
                                        onChange={e => handleCheck(e)}
                                    >

                                        <MenuItem value={"Auriculares"}>Auriculares</MenuItem>
                                        <MenuItem value={"Fuente de alimentación"}>Fuente de alimentación</MenuItem>
                                        <MenuItem value={"Gabinete"}>Gabinete</MenuItem>
                                        <MenuItem value={"HDD"}>HDD</MenuItem>
                                        <MenuItem value={"Cam"}>Cam</MenuItem>
                                        <MenuItem value={"Micro-procesador"}>Micro-procesador</MenuItem>
                                        <MenuItem value={"Graphics"}>Graphics</MenuItem>

                                        <MenuItem value={"Micrófono"}>Micrófono</MenuItem>
                                        <MenuItem value={"Monitor"}>Monitor</MenuItem>
                                        <MenuItem value={"MotherBoard"}>MotherBoard</MenuItem>
                                        <MenuItem value={"Mouse"}>Mouse</MenuItem>
                                        <MenuItem value={"Mousepad"}>Mousepad</MenuItem>

                                        <MenuItem value={"M.2NVme"}>M.2NVme</MenuItem>
                                        <MenuItem value={"Parlante"}>Parlante</MenuItem>
                                        <MenuItem value={"Placa de video"}>Placa de video</MenuItem>
                                        <MenuItem value={"RAM"}>RAM</MenuItem>
                                        <MenuItem value={"Refrigeración"}>Refrigeración</MenuItem>

                                        <MenuItem value={"Sillas"}>Sillas</MenuItem>
                                        <MenuItem value={"SSD"}>SSD</MenuItem>
                                        <MenuItem value={"Teclados"}>Teclados</MenuItem>
                                        <MenuItem value={"Webcam"}>Webcam</MenuItem>
                                    </Select>
                                </FormControl>
                                {errors.category && (<p className={style.error}><p className="error" >{errors.category}</p></p>)}
                            </div>
                            <div>
                                <FormControl>
                                    <FormLabel id="demo-form-control-label-placement"  sx={{ ml: 2, mt:2 }}>Estado</FormLabel>
                                    <RadioGroup   row   aria-labelledby="demo-form-control-label-placement" 
                                        name="position"  defaultValue="false" onChange={e => handleStatus(e)} value={input.status}>

                                        <FormControlLabel sx={{ ml: 2, mb:2, color: 'gray', bgcolor:'#fff',}}
                                        value="false"
                                        control={<Radio />}
                                        label="Nuevo"
                                        labelPlacement="start"
                                        />
                                        <FormControlLabel sx={{ ml: 2, mb:2, color: 'gray', bgcolor:'#fff',}}
                                        value="true"
                                        control={<Radio />}
                                        label="Usado"
                                        labelPlacement="start"
                                        />
                                    </RadioGroup>
                                </FormControl>  
                            </div>
                        </div>
                    </Box>
                    <Link to= "/admin/products" className= {style.volver1}>
                        <Button sx={{ m: 1, width: '20ch', color: '#022335', bgcolor:'#fff', borderColor:'#dee2e6',  borderRadius: "5px"}}   variant="outlined" startIcon={<KeyboardReturnIcon fontSize = "large"/>}>
                            volver
                        </Button>
                    </Link> 
                    <Stack direction="row" spacing={2} >
                        <Button sx={{ m: 1, width: '70ch', color: '#022335', bgcolor:'#fff', borderColor:'#022335',  borderRadius: "10px"}} type='submit' className= {style.modificar} variant="outlined" startIcon={<EditIcon fontSize = "large"/>}>
                            Modificar Producto
                        </Button>
                    </Stack>
                </Box>
                <br />
            </form>
        </div>
    );
};


