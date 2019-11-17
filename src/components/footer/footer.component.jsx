import React from 'react';

import { CURRENT_YEAR } from '../../config';

import './footer.styles.scss';

const Footer = () => (
    <div >
        <div className="footer">
            @JeepLife {CURRENT_YEAR} All rights reserved.
            </div>
    </div>
)

export default Footer;