import React, {useState} from 'react';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import {ReactComponent as SpoilerIcon} from "../assets/spolier-icon.svg";
import './Spoiler.scss'

function Spoiler({label, spoilerText}) {
    const [isSpoiler, setSpoiler] = useState(false);

    const toggleSpoiler = () => {
        setSpoiler(!isSpoiler);
    }

    const spoilerIconClass = isSpoiler? 'spoiler-icon-opened':'spoiler-icon-closed';

    return (
        <div className={'spoiler'}>
            <div onClick={toggleSpoiler} className={'spoiler-top'}>
                <SpoilerIcon className={'spoiler-icon ' + spoilerIconClass}/>
                <p className={'spoiler-label font-bold mt-0.5 ml-2'}>{label}</p>
            </div>
            <CSSTransition in={isSpoiler}
                           timeout={300}
                           classNames="item"
                           unmountOnExit>
                <div className={'spoiler-data'}>
                    {spoilerText}
                </div>
            </CSSTransition>
        </div>
    );
}

export default Spoiler;