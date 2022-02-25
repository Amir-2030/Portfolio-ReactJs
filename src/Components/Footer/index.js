import React from 'react';
import {Foo,Footerp} from './style.js'
import { render } from '@testing-library/react';
const Footer = () => {
  return (
         <Foo>
            <Footerp> Copyright &copy; 2022 by Amir </Footerp>
        </Foo>
  );
}

export default Footer;