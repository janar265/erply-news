import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/button';
import { Form, Icon } from 'semantic-ui-react';
import { formatDate } from '../../../utils/dateUtils';

const Story = ({ article, onBackClick }) => {
    return (
        <div className="story-container">
            <Icon size="big" className="story-back-button" name="arrow left" onClick={onBackClick} />
            <div className="story-header">{article.title}</div>
            <div className="story-author">{article.author}</div>
            <div>{article.source.name}</div>
            <img className="story-image"
                src={article.urlToImage == null ? "https://react.semantic-ui.com/images/avatar/large/matthew.png" : article.urlToImage}
                alt="Story header" />
            {formatDate(article.publishedAt)}
            <div className="story-content">{article.content}</div>
            <Form action={article.url} target="_blank" rel="noopener noreferrer">
                <Button fluid primary content="To read more click here" />
            </Form>
        </div>
    );
}

Story.propTypes = {
    article: PropTypes.object.isRequired,
    onBackClick: PropTypes.func.isRequired
}

export default Story;
