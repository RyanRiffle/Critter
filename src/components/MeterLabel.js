import React from 'react';
import { Box, Stack, Meter, Text } from 'grommet';

class MeterLabel extends React.Component 
{
    render() 
    {
        if (this.props.empty) {
            return (
                <Box margin='medium'>{this.props.onEmpty}</Box>
            );
        }

        return (
            <Box size='192px' area={this.props.area || undefined}>
                <Stack anchor='center' area='secondary' alignSelf='start'>
                    <Meter type='circle' values={[{value: this.props.value}]} size='small' thickness='small'/>
                    <Text textAlign='center'>{this.props.label}</Text>
                </Stack>
            </Box>
        );
    }
}

export default MeterLabel;