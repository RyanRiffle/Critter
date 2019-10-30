import React from 'react';
import { AccordionPanel, Box } from 'grommet';

class AccordionPanelIcon extends React.Component {

    renderLabel()
    {
        return (
            <Box direction='row' pad='small'>
                {this.props.label}
            </Box>
        );
    }

    render() {
        if (false) {
            return (
                <AccordionPanel label={<Box pad='small'>{this.props.icon}</Box>}>
                    {this.props.children}
                </AccordionPanel>
            );
        } else {
            return (
                <AccordionPanel label={this.renderLabel()}>
                    {this.props.children}
                </AccordionPanel>
            );
        }
    }
}

export default AccordionPanelIcon;