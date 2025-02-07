export default function CustomSvg (name){
    return (
        
        name === 'expandArrow'
        ?
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#222222"/>
            <path d="M24.1744 26.4528L25.6479 18.0964L24.1744 26.4528ZM24.1744 26.4528L15.8181 24.9794L24.1744 26.4528ZM24.1744 26.4528L18.1519 17.8517L24.1744 26.4528ZM14.9972 13.3464L16.4312 15.3943L14.9972 13.3464Z" fill="#222222"/>
            <path d="M24.1744 26.4528L25.6479 18.0964M24.1744 26.4528L15.8181 24.9794M24.1744 26.4528L18.1519 17.8517M14.9972 13.3464L16.4312 15.3943" stroke="#FFD800" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        :
        <></>
    )
}