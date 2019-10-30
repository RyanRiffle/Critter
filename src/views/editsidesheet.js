import React from 'react';
import { withRouter } from "react-router-dom";

import { 
	SideSheet, 
	TextInputField, 
	Heading, 
	Label,
	Textarea, 
	Button,
	Pane,
	Combobox,
	Tablist,
	Tab,
	Card
} from 'evergreen-ui';

import _ from 'lodash';

class EditSideSheet extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedTab: 0,
			formValues: {
				...this.props.values
			}
		}
	}

	onClose() {
		if (this.props.onCloseComplete) {
			this.props.onCloseComplete();
		}
	}

	onChange(name, ev) {
		var value = ev.target ? ev.target.value : ev;
		var values = this.props.values;
		_.set(values, name, value);
		this.setState({
			formValues: values
		});
	}

	renderTextInput(field) {
		return (
			<TextInputField
				label={field.label}
				placeholder={field.placeholder}
				onChange={this.onChange.bind(this, field.property)}
				inputHeight={64}
				value={this.props.values[field.property]}/>
		);
	}



	applyEdits() {
		if (this.props.onApply) {
			this.props.onApply(this.props.values);
		}
	}

	renderTextArea(field) {
		return (
			<Pane marginBottom={24}>
				<Label
					marginBottom={4}
					display='block'
					htmlFor='textarea'>
					{field.label}
				</Label>
				<Textarea
					id='textarea'
					placeholder={field.placeholder}
					onChange={this.onChange.bind(this, field.property)}
					height={64}
					value={_.get(this.props.values, field.property)}
					resize='vertical'/>
			</Pane>
		);
	}

	renderComboBox(field) {
		return (
			<Pane marginBottom={24}>
				<Label
					marginBottom={4}
					display='block'
					htmlFor={field.property}>
					{field.label}
				</Label>
				<Combobox
					items={field.items}
					onChange={this.onChange.bind(this, field.property)}
					placeholder='All Grain'
					height={64}
					width='100%'
					autocompleteProps={{
						title: field.label
					}}/>
			</Pane>
		);
	}

	render() {
		return (
			<SideSheet
				isShown={this.props.isShown}
				onCloseComplete={this.onClose.bind(this)}>
				<Pane backgroundColor='white' position='relative'>
					<Pane padding={16} borderBottom='muted'>
						<Heading size={600} marginBottom={32}>{this.props.heading}</Heading>
					</Pane>
					<Pane padding={8} display='block' borderBottom='muted'>
						<Tablist>
							{this.props.views.map((view, index) => (
							<Tab 
								key={view.label}
								isSelected={this.state.selectedTab === index}
								onSelect={() => this.setState({selectedTab: index})}>
								{view.label}
							</Tab>
							))}
						</Tablist>
					</Pane>

					{this.props.views.map((view, index) => {
						if (this.state.selectedTab === index) {
							return (
								<Pane padding={16} height='100%' background='tint1'>
									<Card
										background='white'
										alignItems='center'
										padding={16}
										border='muted'>
										{view.fields.map(field => {
											if (field.type === 'text' || !field.type)
												return this.renderTextInput(field);
											else if (field.type === 'textarea')
												return this.renderTextArea(field);
											else if (field.type === 'combobox')
												return this.renderComboBox(field);

											return '';
										})}
									</Card>	
								</Pane>
							);
						}
					})}
						
						
				</Pane>
			</SideSheet>
		);
	}
}

export default withRouter(EditSideSheet);