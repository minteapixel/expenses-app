import React from 'react';
import Modal from 'react-modal';
import { shallow } from 'enzyme';
import ConfirmRemoveModal from '../../components/ConfirmRemoveModal';
import { handleCloseModal, onRemove } from '../../components/EditExpensePage';

test('should render ConfirmRemoveModal', () => {
	const showModal = true;
	const description = 'description here';
	const handleCloseModal = jest.fn();
 	const onRemove = jest.fn();
	const wrapper = shallow(
		<ConfirmRemoveModal
			showModal = { showModal }
			description = { description }
			handleCloseModal = { handleCloseModal }
			onRemove = { onRemove }
		/>
	);
	expect(wrapper).toMatchSnapshot();
});