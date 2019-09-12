import React from 'react';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory-selectors';
import { createStructuredSelector } from 'reselect';
import Menu from '../menu/Menu';
import { DirectoryContainer } from './Directory.styles';
// import './styles/directory.scss';

const Directory = ({sections}) => (
    <DirectoryContainer>
        {sections.map(({id, ...otherSectionProps}) => (
            <Menu key={id} {...otherSectionProps}/>
        ))}
    </DirectoryContainer>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps) (Directory);