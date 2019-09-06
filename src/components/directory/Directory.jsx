import React from 'react';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory-selectors';
import { createStructuredSelector } from 'reselect';
import Menu from '../menu/Menu';
import './styles/directory.scss';

const Directory = ({sections}) => (
    <div className='directory'>
        {sections.map(({id, ...otherSectionProps}) => (
            <Menu key={id} {...otherSectionProps}/>
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps) (Directory);