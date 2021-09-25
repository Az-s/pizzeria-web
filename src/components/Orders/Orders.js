import React, { useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder, deleteOrder } from '../../store/actions/actionsOrders';


const Orders = () => {
    const dispatch = useDispatch();

    const allOrders = useSelector(state => state.orders.orders);

    useEffect(() => {
        dispatch(fetchOrder());
    }, [dispatch]);

    const delOrder = async (id) => {
        try {
            await dispatch(deleteOrder(id));
        } catch (e) {
            console.log('error happened');
        }
    };  

    return (
        <Container maxWidth="lg">
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                {allOrders.map((order) => (
                    <>
                        <Card sx={{ display: 'flex', width: '50%', margin: '1rem' }} className='cards' key={order.id}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '200px' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        {order.name}
                                    </Typography>
                                    <Typography component="div" variant="h6">
                                        {order.total} KGS
                                    </Typography>
                                </CardContent>
                                <Button variant="contained" sx={{ marginTop: '1rem' }} onClick={() => delOrder(order.id)}>
                                    Delete
                                </Button>
                            </Box>
                        </Card>
                    </>
                ))}
            </Grid>
        </Container>
    )
}

export default Orders;
