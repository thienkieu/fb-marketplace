import styled from 'styled-components';
import styles from './sticky.module.css';
import { useEffect, useState } from 'react';

const StickyMenuItem = styled.span`
    transition-delay: 0.3s;
    border-bottom: 0px solid green;
    padding: 15px;
    font-weight: bold;

    &.active {
        border-bottom: 2px solid green;
        color: green;
    }

    &:first-child{
        margin-left: 0px;
    }
`;

const handleScroll = (stickyPosition, stickyEl, setDisplay, anchorSections, setActiveSection) => {
    return () => {
        const totalSection = anchorSections.length - 1;
        let activeSection = anchorSections[0].id;
        for(let i = totalSection; i > 0 ; i= i -1 ) {
            const el = document.getElementById(anchorSections[i].id);
            const p = el.offsetTop;
            if (window.pageYOffset >= p - 70) {
                activeSection = anchorSections[i].id;
                break;
            }
        }
        setActiveSection(activeSection);

        if (window.pageYOffset >= stickyPosition) {
            setDisplay(true);
        } else {
            setDisplay(false);
        }
    }
}

const StickyMenu  = (props) => {
    const [display, setDisplay] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

    useEffect(()=>{
        const anchorElement = document.getElementById(props.anchorElementId);
        const position = anchorElement.offsetTop;
        const stickyEl = document.getElementById(props.id);

        const handler = handleScroll(position, stickyEl, setDisplay, props.anchorSections, setActiveSection);
        window.addEventListener('scroll', handler);
        return () => {
            window.removeEventListener('scroll', handler);
        }
    }, [props.id]);

    const cssClass = display ? styles['sticky-display'] :  styles['sticky-hidden'];
    return (
        <div id={props.id} className={cssClass}>
            <div className="container">
            {props.anchorSections.map(
                item =>
                <StickyMenuItem
                    onClick={(e)=>{
                        const sectionEl =  document.getElementById(item.id);
                        window.scrollTo({
                            top: sectionEl.offsetTop - 70,
                            left: 0,
                            behavior: 'smooth'
                          });
                    }}
                    key={item.id}
                    className={activeSection === item.id ? 'active': ''}
                >
                    {item.title}
                </StickyMenuItem>
            )}
            </div>
        </div>
    )
};

export default StickyMenu;
