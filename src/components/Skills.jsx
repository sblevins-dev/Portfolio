import { Box, SvgIcon, Typography, styled } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex'
import React from 'react'

const SkillSection = styled(Box)({
    padding: '100px 10px',
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: "center",
    gap: 50,
    color: 'white',
    position: 'relative',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#16161696',
        backdropFilter: "blur(5px) saturate(100%)",
        zIndex: '0'
    }
})

const SectionItem = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 15,
    zIndex: '1'
})

const Skills = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '100px',
                paddingBottom: '50px',
                overflow: 'hidden',
            }}
        >
            <Typography variant="h4" color={'white'}
                sx={{
                    textDecoration: '1px underline rgb(0, 119, 255)',
                    textUnderlineOffset: '12px',
                    paddingBottom: '35px'
                }}
            >
                SKILLS
            </Typography>
            <SkillSection>
                <SectionItem>
                    <SvgIcon viewBox="0 0 128 128">
                        <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z" /><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z" />
                    </SvgIcon>
                    <Typography variant='subtitle1'>
                        JAVASCRIPT
                    </Typography>
                </SectionItem>
                <SectionItem>
                    <SvgIcon viewBox="0 0 128 128">
                        <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"></path><path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"></path><path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"></path><path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"></path><path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"></path>
                    </SvgIcon>
                    <Typography variant='subtitle1'>
                        JAVA
                    </Typography>
                </SectionItem>
                <SectionItem>
                    <SvgIcon viewBox="0 0 128 128">
                        <path fill="#9B4F96" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path><path fill="#68217A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"></path>
                    </SvgIcon>
                    <Typography variant='subtitle1'>
                        C#
                    </Typography>
                </SectionItem>
                <SectionItem>
                    <SvgIcon viewBox="0 0 128 128">
                        <path fill="#5fa04e" d="M114.313 55.254a.26.26 0 0 0-.145.044l-2.346 1.37a.3.3 0 0 0-.142.26v2.74c0 .116.055.204.142.262l2.346 1.368a.262.262 0 0 0 .29 0l2.342-1.368a.308.308 0 0 0 .145-.263V56.93a.303.303 0 0 0-.145-.26l-2.343-1.371a.26.26 0 0 0-.144-.044zM63.22 71.638c-.427 0-.852.104-1.214.308l-11.549 6.727a2.457 2.457 0 0 0-1.214 2.124V94.22c0 .874.462 1.69 1.214 2.128l3.04 1.746c1.476.728 1.997.726 2.662.726 2.17 0 3.415-1.339 3.415-3.64V81.935a.356.356 0 0 0-.348-.351h-1.474a.356.356 0 0 0-.35.351v13.248c0 1.019-1.069 2.04-2.776 1.167l-3.155-1.835c-.116-.058-.175-.206-.175-.322V80.767c0-.116.059-.26.175-.319l11.545-6.697c.087-.058.233-.058.349 0l11.548 6.697c.115.059.172.174.172.32v13.424c0 .145-.057.264-.172.322l-11.548 6.727c-.087.058-.233.058-.349 0l-2.951-1.779c-.087-.058-.203-.087-.29-.029-.81.466-.952.527-1.734.789-.174.058-.463.173.115.493l3.85 2.302c.376.203.78.319 1.214.319.434 0 .867-.115 1.214-.26l11.549-6.727a2.463 2.463 0 0 0 1.214-2.128V80.797c0-.874-.462-1.687-1.214-2.124l-11.549-6.727a2.488 2.488 0 0 0-1.214-.308Zm18.03 6.13a2.236 2.236 0 0 0-2.227 2.243 2.236 2.236 0 0 0 2.227 2.242c1.217 0 2.228-1.019 2.228-2.242a2.254 2.254 0 0 0-2.228-2.242zm-.03.379a1.86 1.86 0 0 1 1.883 1.864c0 1.02-.84 1.894-1.882 1.894-1.012 0-1.852-.846-1.852-1.894s.869-1.864 1.852-1.864zm-.809.611v2.562h.494v-1.016h.434c.174 0 .231.058.26.203 0 .03.086.67.086.786h.52c-.058-.116-.087-.466-.116-.67-.028-.32-.056-.553-.404-.582.174-.059.463-.146.463-.612 0-.67-.58-.67-.868-.67zm.435.408h.404c.146 0 .376 0 .376.349 0 .116-.056.351-.376.351h-.405zm-14.47 2.01c-3.3 0-5.268 1.398-5.268 3.757 0 2.534 1.968 3.23 5.123 3.551 3.79.379 4.08.933 4.08 1.69 0 1.31-1.044 1.864-3.475 1.864-3.068 0-3.733-.758-3.965-2.301 0-.175-.142-.29-.316-.29H61.05a.35.35 0 0 0-.346.349c0 1.98 1.041 4.31 6.107 4.31 3.645 0 5.758-1.458 5.758-4.02 0-2.505-1.68-3.174-5.238-3.64-3.59-.466-3.965-.728-3.965-1.572 0-.699.318-1.63 2.98-1.63 2.373 0 3.269.525 3.617 2.126a.34.34 0 0 0 .319.26h1.533c.088 0 .175-.057.234-.115a.476.476 0 0 0 .085-.263c-.231-2.795-2.053-4.077-5.758-4.077z"></path><path fill="#333" d="M86.072 24.664a.71.71 0 0 0-.352.089.755.755 0 0 0-.375.638V44.32c0 .174-.09.35-.263.466a.549.549 0 0 1-.52 0l-3.066-1.775a1.486 1.486 0 0 0-1.478 0L67.75 50.146a1.48 1.48 0 0 0-.753 1.279v14.24c0 .524.29 1.02.753 1.282l12.27 7.135a1.486 1.486 0 0 0 1.477 0l12.269-7.135c.463-.262.753-.758.753-1.282V30.168c0-.553-.29-1.05-.753-1.311l-7.32-4.104a.836.836 0 0 0-.373-.089zM13.687 42.43c-.231 0-.462.084-.664.2L.753 49.739A1.493 1.493 0 0 0 0 51.047l.03 19.102c0 .263.143.525.375.642a.656.656 0 0 0 .724 0l7.294-4.193c.463-.262.75-.758.75-1.282v-8.94c0-.524.29-1.02.754-1.282l3.096-1.805c.231-.146.493-.204.753-.204s.521.058.724.204l3.096 1.805c.463.262.753.758.753 1.282v8.94c0 .524.288 1.02.75 1.282l7.236 4.193a.704.704 0 0 0 .753 0 .724.724 0 0 0 .376-.642V51.047c0-.524-.29-1.02-.754-1.283L14.47 42.63a1.763 1.763 0 0 0-.664-.201Zm100.667.21c-.253 0-.504.066-.736.198l-12.272 7.131c-.463.262-.75.758-.75 1.283v14.24c0 .524.287 1.02.75 1.282l12.184 6.987a1.43 1.43 0 0 0 1.447 0l7.38-4.133a.724.724 0 0 0 .375-.642.724.724 0 0 0-.375-.64L110.03 61.21a.76.76 0 0 1-.375-.641v-4.456a.72.72 0 0 1 .375-.64l3.85-2.214a.705.705 0 0 1 .753 0l3.846 2.213a.762.762 0 0 1 .378.641v3.495c0 .263.144.525.375.641a.704.704 0 0 0 .754 0l7.291-4.28a1.46 1.46 0 0 0 .724-1.283v-3.465c0-.524-.29-1.017-.724-1.28l-12.184-7.104a1.499 1.499 0 0 0-.738-.198zM80.757 53.274c.065 0 .131.015.19.045l4.194 2.446c.116.058.175.202.175.319v4.892c0 .146-.059.264-.175.322l-4.195 2.446a.431.431 0 0 1-.378 0l-4.195-2.446c-.116-.058-.175-.205-.175-.322v-4.892c0-.146.06-.261.175-.32l4.195-2.445a.425.425 0 0 1 .19-.045z"></path><path fill="url(#a)" d="M47.982 42.893a1.484 1.484 0 0 0-1.476 0L34.322 49.97a1.456 1.456 0 0 0-.724 1.281v14.181c0 .525.29 1.02.724 1.282l12.184 7.076a1.484 1.484 0 0 0 1.476 0l12.183-7.076c.463-.262.724-.757.724-1.282V51.251c0-.524-.29-1.02-.724-1.281z"></path><path fill="url(#b)" d="m60.194 49.97-12.241-7.077a1.996 1.996 0 0 0-.376-.145L33.859 66.364c.116.146.26.262.405.35l12.242 7.076c.347.204.752.262 1.128.145l12.879-23.703a.905.905 0 0 0-.319-.262z"></path><path fill="url(#c)" d="M60.194 66.713c.348-.204.608-.553.724-.932l-13.4-23.063c-.346-.058-.723-.029-1.041.175L34.322 49.94l13.11 24.053c.173-.029.376-.087.55-.175z"></path><defs><linearGradient id="a" x1="34.513" x2="27.157" y1="15.535" y2="30.448" gradientTransform="translate(0 24.664) scale(1.51263)" gradientUnits="userSpaceOnUse"><stop stopColor="#3F873F"></stop><stop offset=".33" stopColor="#3F8B3D"></stop><stop offset=".637" stopColor="#3E9638"></stop><stop offset=".934" stopColor="#3DA92E"></stop><stop offset="1" stopColor="#3DAE2B"></stop></linearGradient><linearGradient id="b" x1="30.009" x2="50.533" y1="23.359" y2="8.288" gradientTransform="translate(0 24.664) scale(1.51263)" gradientUnits="userSpaceOnUse"><stop offset=".138" stopColor="#3F873F"></stop><stop offset=".402" stopColor="#52A044"></stop><stop offset=".713" stopColor="#64B749"></stop><stop offset=".908" stopColor="#6ABF4B"></stop></linearGradient><linearGradient id="c" x1="21.917" x2="40.555" y1="22.261" y2="22.261" gradientTransform="translate(0 24.664) scale(1.51263)" gradientUnits="userSpaceOnUse"><stop offset=".092" stopColor="#6ABF4B"></stop><stop offset=".287" stopColor="#64B749"></stop><stop offset=".598" stopColor="#52A044"></stop><stop offset=".862" stopColor="#3F873F"></stop></linearGradient></defs>
                    </SvgIcon>
                    <Typography variant='subtitle1'>
                        NODE
                    </Typography>
                </SectionItem>
                <SectionItem>
                    <SvgIcon viewBox="0 0 128 128">
                        <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
                    </SvgIcon>
                    <Typography variant='subtitle1'>
                        REACT
                    </Typography>
                </SectionItem>
                <SectionItem>
                    <SvgIcon viewBox="0 0 128 128">
                        <path d="M116.452 6.643a59.104 59.104 0 01-6.837 12.136A64.249 64.249 0 0064.205-.026C28.984-.026 0 28.982 0 64.242a64.316 64.316 0 0019.945 46.562l2.368 2.1a64.22 64.22 0 0041.358 15.122c33.487 0 61.637-26.24 64.021-59.683 1.751-16.371-3.051-37.077-11.24-61.7zM29.067 111.17a5.5 5.5 0 01-4.269 2.034c-3.018 0-5.487-2.484-5.487-5.502 0-3.017 2.485-5.501 5.487-5.501 1.25 0 2.485.433 3.452 1.234 2.351 1.9 2.718 5.384.817 7.735zm87.119-19.238c-15.843 21.122-49.68 14.003-71.376 15.02 0 0-3.852.234-7.721.867 0 0 1.45-.617 3.335-1.334 15.226-5.301 22.43-6.335 31.685-11.086 17.427-8.869 34.654-28.274 38.24-48.463-6.637 19.422-26.75 36.11-45.077 42.895-12.557 4.635-35.238 9.136-35.238 9.136l-.917-.484c-15.442-7.518-15.91-40.977 12.157-51.78 12.291-4.735 24.048-2.134 37.323-5.302 14.175-3.367 30.568-14.004 37.238-27.874 7.471 22.19 16.46 56.932.35 78.405z" fill="#77bc1f"></path>

                    </SvgIcon>
                    <Typography variant='subtitle1'>
                        SPRING
                    </Typography>
                </SectionItem>
                <SectionItem>
                    <SvgIcon viewBox="0 0 128 128">
                        <path fill="#073042" d="M51.3 17.7H23.2C17.6 17.7 13 22.3 13 28c-.2 5.5 4.2 10.1 9.7 10.3h28.9l-.3-20.6z"></path><path fill="#4285F4" d="M115 109.3H23.2c-5.7 0-10.2-4.6-10.2-10.3V27.9c0 5.7 4.6 10.3 10.2 10.4h76.9s15-1.3 15 10v61z"></path><path fill="#3870B2" d="M72.2 72.9C76.3 69.8 77.1 64 74 60c-1.7-2.2-4.3-3.6-7.1-3.7h.3c.5-.1 1.1-.1 1.6 0v-5.7c0-.7-.3-1.3-.9-1.6-.9-.5-2-.2-2.5.7-.2.3-.3.6-.2 1v5.8c-5 .8-8.5 5.5-7.7 10.6v.1c.4 2.4 1.7 4.6 3.7 6l-16.9 36.2h11l7.8-16.6c.9-2 3.3-2.9 5.4-1.9.8.4 1.5 1.1 1.9 1.9l8.1 16.6h11.2L72.2 72.9zm-5.7-1.6c-3.2 0-5.7-2.6-5.7-5.8 0-3.2 2.6-5.7 5.8-5.6 1.5 0 2.8.6 3.9 1.6 2.3 2.2 2.3 5.8.1 8.1-1 1-2.5 1.7-4.1 1.7z"></path><path fill="#FFF" d="M45.2 22.7h39.4v7.2H45.2v-7.2z"></path><path fill="#073042" d="M63.5 59.8c3.1 0 5.7 2.6 5.6 5.8 0 3.1-2.6 5.7-5.8 5.6-3.1 0-5.6-2.6-5.6-5.7 0-1.5.6-2.9 1.7-4s2.6-1.7 4.1-1.7zm2.2-3.3v-6c0-.7-.3-1.3-.9-1.6-.9-.5-2-.2-2.5.7-.2.3-.3.6-.2 1v5.8c-5 .8-8.5 5.5-7.7 10.6v.1c.4 2.4 1.7 4.6 3.7 6l-21.3 45.7c-.8 1.6-.7 3.6.4 5.1 1.6 2.3 4.7 2.9 7 1.3.8-.5 1.4-1.3 1.8-2.1l14.2-30.4c.9-2 3.3-2.9 5.4-1.9.8.4 1.5 1.1 1.9 1.9L82 122.8c1.2 2.5 4.2 3.5 6.7 2.3 2.5-1.2 3.5-4.2 2.3-6.7L69.1 72.9c4-3.2 4.7-9.1 1.5-13.1-1.2-1.6-2.9-2.7-4.9-3.3"></path><path fill="#3DDC84" d="M78.8 29.1c-1.5 0-2.7-1.1-2.7-2.6 0-.7.3-1.5.8-2 1.1-1 2.7-1 3.8 0 .5.5.8 1.2.8 1.9-.1 1.5-1.2 2.6-2.7 2.7M49.2 29c-1.5 0-2.7-1.2-2.7-2.6 0-.7.3-1.4.8-1.9.9-1.1 2.6-1.3 3.7-.4h.1c1.1 1 1.2 2.7.2 3.8l-.3.4c-.5.5-1.2.8-1.9.8m30.5-16.2l5.3-9.2c.3-.5.1-1.1-.3-1.5-.5-.2-1-.1-1.3.3L77.8 12C69 8.1 59 8.1 50.3 12l-5.4-9.4c-.2-.3-.6-.6-1-.6s-.8.2-1 .6c-.2.3-.2.8 0 1.1l5.4 9.2C38.9 18 32.8 27.6 31.9 38.2h64.2c-.8-10.7-7-20.2-16.4-25.3"></path><path fill="#073042" d="M105.6 58.1h-4.2c-.2.1-.4.3-.4.6v66.5c0 .3.2.5.5.5h4.4c5.1 0 9.2-4.2 9.2-9.2V48.8c0 5.1-4.1 9.2-9.2 9.2h-.3z"></path>

                    </SvgIcon>
                    <Typography variant='subtitle1'>
                        ANDROID
                    </Typography>
                </SectionItem>
                <SectionItem>
                    <SvgIcon viewBox="0 0 128 128">
                        <path fill="#1FA6CA" d="M.2 68.6V13.4L48 41v18.4L16.1 41v36.8L.2 68.6z"></path><path fill="#1C7FB6" d="M48 41l47.9-27.6v55.3L64 87l-16-9.2 32-18.4V41L48 59.4V41z"></path><path fill="#1FA6CA" d="M48 77.8v18.4l32 18.4V96.2L48 77.8z"></path><path fill="#1C7FB6" d="M80 114.6L127.8 87V50.2l-16 9.2v18.4L80 96.2v18.4zM111.9 41V22.6l16-9.2v18.4l-16 9.2z"></path>

                    </SvgIcon>
                    <Typography variant='subtitle1'>
                        MUI
                    </Typography>
                </SectionItem>
                <SectionItem>
                    <SvgIcon viewBox="0 0 128 128">
                        <defs><linearGradient id="a" x1="48" x2="48" y1="97.75" y2="2.25" gradientTransform="matrix(1 0 0 -1 0 97.75)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fff"></stop><stop offset="1" stopColor="#fff" stopOpacity="0"></stop></linearGradient></defs><path fill="#52218a" d="M14.39 26.295a5.333 5.333 0 0 0-1.417.373l-9.694 4A5.333 5.333 0 0 0 0 35.561v56.88a5.333 5.333 0 0 0 3.28 4.893l9.693 4.066a5.333 5.333 0 0 0 5.521-.865l2.172-1.867a2.947 2.947 0 0 1-4.666-2.4V31.734a2.947 2.947 0 0 1 4.666-2.4l-2.172-1.799a5.333 5.333 0 0 0-4.103-1.24z"></path><path fill="#6c33af" d="M94.75.416A8 8 0 0 0 88 2.668l-82.666 91.4A3.08 3.08 0 0 1 0 92.002v.44a5.333 5.333 0 0 0 3.28 4.892l9.693 4.066a5.333 5.333 0 0 0 5.521-.865l2.172-1.867 99.08-81.24A5.053 5.053 0 0 1 128 21.334v-.307a8 8 0 0 0-4.533-7.213L97.094 1.121A8 8 0 0 0 94.75.416Z"></path><path fill="#854cc7" d="M14.871 26.238a5.333 5.333 0 0 0-1.898.43l-9.694 4A5.333 5.333 0 0 0 0 35.561v.441a3.08 3.08 0 0 1 5.334-2.066L88 125.334a8 8 0 0 0 9.094 1.547l26.373-12.694a8 8 0 0 0 4.533-7.212v-.307a5.053 5.053 0 0 1-8.254 3.906l-99.08-81.24-2.172-1.865a5.333 5.333 0 0 0-3.623-1.23z"></path><path fill="#b179f1" d="M94.75.416a8 8 0 0 0-5.674 1.469A4.693 4.693 0 0 1 96 6.015v116a4.693 4.693 0 0 1-8 3.319 8 8 0 0 0 9.094 1.547l26.373-12.68a8 8 0 0 0 4.533-7.213V21.016a8 8 0 0 0-4.533-7.215L97.094 1.12A8 8 0 0 0 94.75.416Zm-5.674 1.469A4.693 4.693 0 0 0 88 2.668a8 8 0 0 1 1.076-.783Z"></path><path fill="url(#a)" fillRule="evenodd" d="M94.145.348a8 8 0 0 0-3.026.386A8 8 0 0 0 88 2.668L45.494 49.682 20.666 29.334l-2.172-1.865a5.333 5.333 0 0 0-4.814-1.108 3.4 3.4 0 0 0-.707.24l-9.694 4.067A5.333 5.333 0 0 0 0 35.162v57.679a5.333 5.333 0 0 0 3.28 4.493l9.693 4a3.4 3.4 0 0 0 .707.24 5.333 5.333 0 0 0 4.814-1.105l2.172-1.801 24.828-20.346L88 125.334a8 8 0 0 0 3.854 2.135 8 8 0 0 0 5.24-.588l26.373-12.68a8 8 0 0 0 4.533-7.213V21.016a8 8 0 0 0-4.533-7.215L97.094 1.12a8 8 0 0 0-2.95-.773ZM96 36.908v54.186L62.947 64.002Zm-80 8.787 16.547 18.307L16 82.309Z" opacity=".25"></path>

                    </SvgIcon>
                    <Typography variant='subtitle1'>
                        VS
                    </Typography>
                </SectionItem>
                <SectionItem>
                    <SvgIcon viewBox="0 0 128 128">
                        <path fillRule="evenodd" clipRule="evenodd" fill="#439934" d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051-.169-24.252 1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#45A538" d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#46A037" d="M88.038 42.812c-1.384.206-2.768.403-4.149.616-3.131.485-6.263.968-9.392 1.465-2.622.417-5.242.852-7.862 1.281l-1.602.275-.012-1.045c-.053-.859-.144-1.717-.154-2.576-.069-5.478-.112-10.956-.18-16.434-.042-3.429-.105-6.857-.175-10.285-.043-2.13-.089-4.261-.185-6.388-.052-1.143-.236-2.28-.311-3.423-.042-.657.016-1.319.029-1.979.817 1.583 1.616 3.178 2.456 4.749 1.327 2.484 3.441 4.314 5.344 6.311 7.523 7.892 12.864 17.068 16.193 27.433z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#409433" d="M65.036 80.753c.081-.026.222-.034.235-.08.491-1.682 1.996-1.431 3.212-1.641 3.432-.594 6.875-1.13 10.313-1.687 3.326-.539 6.652-1.081 9.981-1.604.394-.062.805-.011 1.208-.012-.622 2.22-1.112 4.488-1.901 6.647-.896 2.449-1.98 4.839-3.131 7.182a49.142 49.142 0 01-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23-1.214-1.038-1.256-2.753a41.402 41.402 0 01-1.394-9.838l.023-.561.171-2.426c.057-.828.133-1.655.168-2.485.129-2.982.241-5.964.359-8.946z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#4FAA41" d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913-2.75-8.209-5.467-16.431-8.213-24.642a4498.887 4498.887 0 00-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6167.476 6167.476 0 016.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198.116.349.308.671.491 1.062l.67-.78-.167 10.052z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#4AA73C" d="M43.155 32.227c.21.274.511.516.617.826a4498.887 4498.887 0 016.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642 1.662 4.961 3.362 9.911 5.062 14.913l.765-.289-.171 2.426-.155.559c-.266 2.656-.49 5.318-.814 7.968-.163 1.328-.509 2.632-.772 3.947-.198-.287-.476-.548-.583-.866-5.467-16.297-10.918-32.6-16.376-48.9a3888.972 3888.972 0 00-5.242-15.551c-.089-.263-.34-.469-.516-.702l3.272-8.84z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#57AE47" d="M65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062-2.913-8.731-5.812-17.468-8.728-26.198a6167.476 6167.476 0 00-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769 1.681 4.921 3.347 9.848 5.003 14.778 1.547 4.604 3.071 9.215 4.636 13.813.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#60B24F" d="M65.021 45.404c-.244-.26-.609-.478-.714-.786-1.565-4.598-3.089-9.209-4.636-13.813-1.656-4.93-3.322-9.856-5.003-14.778-.099-.287-.371-.514-.562-.769 1.969-1.928 3.877-3.925 5.925-5.764 1.821-1.634 3.285-3.386 3.352-5.968.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979.075 1.143.259 2.28.311 3.423.096 2.127.142 4.258.185 6.388.069 3.428.132 6.856.175 10.285.067 5.478.111 10.956.18 16.434.008.861.098 1.718.152 2.577z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#A9AA88" d="M62.598 107.085c.263-1.315.609-2.62.772-3.947.325-2.649.548-5.312.814-7.968l.066-.01.066.011a41.402 41.402 0 001.394 9.838c-.176.232-.425.439-.518.701-.727 2.05-1.412 4.116-2.143 6.166-.1.28-.378.498-.574.744l-.747-2.566.87-2.969z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#B6B598" d="M62.476 112.621c.196-.246.475-.464.574-.744.731-2.05 1.417-4.115 2.143-6.166.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#C2C1A7" d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624-.839 2.403-1.64 4.819-2.485 7.222-.107.305-.404.544-.614.812-.109-1.387-.22-2.771-.331-4.158z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#CECDB7" d="M63.503 120.763c.209-.269.506-.508.614-.812.845-2.402 1.646-4.818 2.485-7.222.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477-.575 1.614-1.117 3.24-1.694 4.854-.119.333-.347.627-.525.938-.158-.207-.441-.407-.454-.623-.051-.841-.016-1.688-.013-2.533z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#DBDAC7" d="M63.969 123.919c.178-.312.406-.606.525-.938.578-1.613 1.119-3.239 1.694-4.854.065-.183.263-.319.398-.477l.012 3.64-1.218 3.124-1.411-.495z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#EBE9DC" d="M65.38 124.415l1.218-3.124.251 3.696-1.469-.572z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#CECDB7" d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23-1.054 1.867z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#4FAA41" d="M64.316 95.172l-.066-.011-.066.01.155-.559-.023.56z"></path>

                    </SvgIcon>

                    <Typography variant='subtitle1'>
                        MONGODB
                    </Typography>
                </SectionItem>
                <SectionItem>
                    <SvgIcon viewBox="0 0 128 128">
                        <path fill="#00618A" d="M117.688 98.242c-6.973-.191-12.297.461-16.852 2.379-1.293.547-3.355.559-3.566 2.18.711.746.82 1.859 1.387 2.777 1.086 1.754 2.922 4.113 4.559 5.352 1.789 1.348 3.633 2.793 5.551 3.961 3.414 2.082 7.223 3.27 10.504 5.352 1.938 1.23 3.859 2.777 5.75 4.164.934.684 1.563 1.75 2.773 2.18v-.195c-.637-.812-.801-1.93-1.387-2.777l-2.578-2.578c-2.52-3.344-5.719-6.281-9.117-8.719-2.711-1.949-8.781-4.578-9.91-7.73l-.199-.199c1.922-.219 4.172-.914 5.949-1.391 2.98-.797 5.645-.59 8.719-1.387l4.164-1.187v-.793c-1.555-1.594-2.664-3.707-4.359-5.152-4.441-3.781-9.285-7.555-14.273-10.703-2.766-1.746-6.184-2.883-9.117-4.363-.988-.496-2.719-.758-3.371-1.586-1.539-1.961-2.379-4.449-3.566-6.738-2.488-4.793-4.93-10.023-7.137-15.066-1.504-3.437-2.484-6.828-4.359-9.91-9-14.797-18.687-23.73-33.695-32.508-3.195-1.867-7.039-2.605-11.102-3.57l-6.543-.395c-1.332-.555-2.715-2.184-3.965-2.977C16.977 3.52 4.223-3.312.539 5.672-1.785 11.34 4.016 16.871 6.09 19.746c1.457 2.012 3.32 4.273 4.359 6.539.688 1.492.805 2.984 1.391 4.559 1.438 3.883 2.695 8.109 4.559 11.695.941 1.816 1.98 3.727 3.172 5.352.727.996 1.98 1.438 2.18 2.973-1.227 1.715-1.297 4.375-1.984 6.543-3.098 9.77-1.926 21.91 2.578 29.137 1.383 2.223 4.641 6.98 9.117 5.156 3.918-1.598 3.043-6.539 4.164-10.902.254-.988.098-1.715.594-2.379v.199l3.57 7.133c2.641 4.254 7.324 8.699 11.297 11.699 2.059 1.555 3.68 4.242 6.344 5.152v-.199h-.199c-.516-.805-1.324-1.137-1.98-1.781-1.551-1.523-3.277-3.414-4.559-5.156-3.613-4.902-6.805-10.27-9.711-15.855-1.391-2.668-2.598-5.609-3.77-8.324-.453-1.047-.445-2.633-1.387-3.172-1.281 1.988-3.172 3.598-4.164 5.945-1.582 3.754-1.789 8.336-2.375 13.082-.348.125-.195.039-.398.199-2.762-.668-3.73-3.508-4.758-5.949-2.594-6.164-3.078-16.09-.793-23.191.59-1.836 3.262-7.617 2.18-9.316-.516-1.691-2.219-2.672-3.172-3.965-1.18-1.598-2.355-3.703-3.172-5.551-2.125-4.805-3.113-10.203-5.352-15.062-1.07-2.324-2.875-4.676-4.359-6.738-1.645-2.289-3.484-3.977-4.758-6.742-.453-.984-1.066-2.559-.398-3.566.215-.684.516-.969 1.191-1.191 1.148-.887 4.352.297 5.547.793 3.18 1.32 5.832 2.578 8.527 4.363 1.289.855 2.598 2.512 4.16 2.973h1.785c2.789.641 5.914.195 8.523.988 4.609 1.402 8.738 3.582 12.488 5.949 11.422 7.215 20.766 17.48 27.156 29.734 1.027 1.973 1.473 3.852 2.379 5.945 1.824 4.219 4.125 8.559 5.941 12.688 1.816 4.113 3.582 8.27 6.148 11.695 1.348 1.801 6.551 2.766 8.918 3.766 1.66.699 4.379 1.43 5.949 2.379 3 1.809 5.906 3.965 8.723 5.945 1.402.992 5.73 3.168 5.945 4.957zm-88.605-75.52c-1.453-.027-2.48.156-3.566.395v.199h.195c.695 1.422 1.918 2.34 2.777 3.566l1.98 4.164.199-.195c1.227-.867 1.789-2.25 1.781-4.363-.492-.52-.562-1.164-.992-1.785-.562-.824-1.66-1.289-2.375-1.98zm0 0"></path>

                    </SvgIcon>
                    <Typography variant='subtitle1'>
                        MYSQL
                    </Typography>
                </SectionItem>
            </SkillSection>

        </Box >
    )
}

export default Skills