import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        width: 100vw;
        height: 100vh;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:16px;
        scrollbar-width : none;
    }

    body::-webkit-scrollbar { 
        display: none; 
    }
    
`;

export default globalStyles;