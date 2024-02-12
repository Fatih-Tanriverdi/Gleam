import React, { useEffect } from 'react';
import $ from 'jquery';
import { Button } from '@mui/material';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

type Props = {}

const ScroolButton: React.FC<Props> = () => {
    useEffect(() => {
        $(document).ready(() => {
            $(window).scroll(() => {
                if ($(window).scrollTop()! > 20) {
                    $('#scrollBtn').fadeIn();
                } else {
                    $('#scrollBtn').fadeOut();
                }
                if ($(window).scrollTop() === 0) {
                    $('#scrollBtn').fadeOut();
                }
            });

            $('#scrollBtn').click(() => {
                $('html, body').animate(
                    {
                        scrollTop: 0,
                    },
                    800
                );
                return false;
            });
        });
    }, []);

    return (
        <Button id="scrollBtn" style={{ display: 'none' }}>
            <ArrowUpwardOutlinedIcon />
        </Button>
    )
}

export default ScroolButton;
