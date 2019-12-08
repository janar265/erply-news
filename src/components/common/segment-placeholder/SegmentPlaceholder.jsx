import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import { Segment, Header, Icon } from 'semantic-ui-react';

const SegmentPlaceholder = ({ icon, message, actionMessage, onActionClick, action }) => {
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name={icon} />
                {message}
            </Header>
            {action &&
                <Segment.Inline>
                    <Button
                        size="small"
                        primary
                        content={actionMessage}
                        onClick={onActionClick} />
                </Segment.Inline>}
        </Segment>
    )
}

SegmentPlaceholder.propTypes = {
    icon: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    action: PropTypes.bool,
    actionMessage: PropTypes.string,
    onActionClick: PropTypes.func
};

export default SegmentPlaceholder;
