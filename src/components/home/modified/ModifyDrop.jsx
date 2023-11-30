import { useEffect } from 'react';
import './style.css'

const ModifyDrop = ({ dropdownRef, dropdownWrapRef, setModifyview }) => {
    const handleOutsideClick = (event) => {
        if (
            dropdownWrapRef.current &&
            !dropdownWrapRef.current.contains(event.target) &&
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setModifyview(false); // Close the menu when clicking outside
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        if (dropdownRef.current) {
            dropdownRef.current.style.maxHeight = `${dropdownRef.current.scrollHeight}px`;  //For animation on click
        }
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);
    return (
        <div >
            <ul className="date-container">
                <li>
                    Today
                </li>
                <li>
                    Last 7 Days
                </li>
                <li>
                    Last 30 Days
                </li>
                <li>
                    This year (2023)
                </li>
                <li>
                    Last year (2022)
                </li>

            </ul>
        </div>
    )
}

export default ModifyDrop