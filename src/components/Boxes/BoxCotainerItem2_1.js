import React, { useState } from "react";
import { Button, Card, CardContent, TextField } from '@mui/material'
import PropTypes from 'prop-types'

const BoxCotainerItem2_1 = ({
    image, name, description
}) => {
    const [count, setCount] = useState(1)

    return (
        <>

            <Card sx={{ p: 0 }}>

                <CardContent className="table-two-row1"  >
                    <div className="product-img"><img src={image} alt={name} /></div>
                    <p>{name}</p>
                    <div className="table-two-row1-1">
                        <text>{description}</text>
                    </div>
                    <div className="product-quantity">
                        <Button
                            variant="outlined"
                            onClick={() => setCount(count - 1)}
                            disabled={count <= 1}
                        > -</Button>
                        <TextField variant="outlined" size="small"
                            value={count}
                        />
                        <Button
                            variant="outlined"
                            onClick={() => setCount(count + 1)}
                            disabled={count >= 7}
                        >
                            +</Button>
                    </div>
                    <div className="add-to-cart">
                        <Button variant="contained" color="inherit">Add to cart</Button>
                    </div>
                </CardContent>

            </Card>

        </>
    )
}

BoxCotainerItem2_1.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
}

BoxCotainerItem2_1.defaultProps = {
    description: 'No description...',
}

export default BoxCotainerItem2_1