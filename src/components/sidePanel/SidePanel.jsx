import './style.css'

const SidePanel = () => {
    return (
        <div className='side_panel_wrap'>

            <div className='checkbox_container'>
                <div className='checkbox_head'>
                    <h4>Filter by:</h4>
                </div>
                <div class="checkbox-wrapper-13">
                    <input id="c1-13" type="checkbox" />
                    <label for="c1-13">Date Created</label>
                </div>
                <div class="checkbox-wrapper-13">
                    <input id="c1-13" type="checkbox" />
                    <label for="c1-13">Name(A-Z)</label>
                </div>
                <div class="checkbox-wrapper-13">
                    <input id="c1-13" type="checkbox" />
                    <label for="c1-13">Size</label>
                </div>
                <div className='check_btn'>
                    <button>Apply</button>
                </div>
            </div>
        </div>
    )
}

export default SidePanel