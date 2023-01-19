import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    :root{
        --mainColor : #000;
        --lightColor : #ffffff;
        --black:#000;
        --darkColor : #23262F;
        --lightGray:#ABAEB0;
        --gray:#777;
        --mainFont : 'Raleway', sans-serif;
    }
    ::-webkit-scrollbar {
        width: 10px;
        color: var(--black);
        background: #eee;
    }
    ::-webkit-scrollbar-track {
        /* background: #000; */
        
    }
    ::-webkit-scrollbar-thumb {
        /* color: var(--mainColor);  */
        background: #26495f;
        
        
    }
    *{
        padding:0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
        font-family: var(--mainFont);
        background: #f5f5f5;
    }   
    a{
        text-decoration:none ;
        color:inherit ;
        &.active{
            .MuiListItemButton-root{
                color:#fff ;
                background: rgba(225,225,225,.1);
                position:relative ;
                &:after{
                    content:"" ;
                    position: absolute;
                    bottom:0 ;
                    left:0 ;
                    height:100% ;
                    width:5px;
                    background:#fff ;
                    border-radius: 0 3px 3px 0 ;
                }

            }
            svg{
                color:#fff
            }
        }

    }
    ul{
        list-style: none;
    }


`;
