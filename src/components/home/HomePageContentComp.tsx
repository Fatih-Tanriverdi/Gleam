import React from 'react';
import { Button } from '@mui/material';
import { ArrowCircleRightOutlined } from '@mui/icons-material';

type Props = {}

const HomePageContentComp = (props: Props) => {

    const gleamInfo = [
        {
            title: "Gleam: Notlarınızı Parlatın, Süreçleri İzleyin!",
            comment: "Gleam, notlarınızı tutarken ve süreçlerinizi yönetirken size eşlik eden yenilikçi bir platformdur. Artık notlarınızı sadece yazmakla kalmayacak, aynı zamanda ne kadar sürede tamamladığınızı da izleyebileceksiniz."
        },
        {
            title: "Notları Tutun, Süreci Takip Edin",
            comment: "Gleam ile notlarınızı her zamankinden daha etkili bir şekilde tutun. Hem metin hem de görsel notlar ekleyin, düzenleyin ve kategorize edin. Ancak bununla yetinmeyin; artık notlarınızın tamamlanma sürelerini de takip edebilirsiniz."
        },
        {
            title: "Gleam ile Her Şey Daha Organize",
            comment: "Artık Gleam sayesinde notlarınız daha düzenli ve organize olacak. Tamamlanma süreleriyle birlikte, hangi notların öncelikli olduğunu ve hangilerine daha fazla zaman harcanması gerektiğini belirleyebileceksiniz."
        },
        {
            title: "Deneyin ve Parıldayın",
            comment: "Gleam'i deneyin ve notlarınızı parlatın! İşlerinizi daha iyi yönetmek ve süreçlerinizi daha verimli hale getirmek için hemen bugün Gleam'i keşfedin."
        }
    ]

    return (
        <>
            <div className='gleamContentContainer'>
                <div className='gleamContentContainerLeft'>
                    <h1>
                        Yaratıcılığınızı parlatın, adımlarınızı kaydedin! <mark>Gleam</mark>, notlarınızı tutmanın ve ilerlemenizi takip etmenin en iyi yolu.
                    </h1>
                    <Button className='registerButton'>
                        <b>Keşfetmek için</b>
                        <ArrowCircleRightOutlined />
                    </Button>
                </div>
                <div className='gleamContentContainerRight'>
                    <img alt='gleamPhoto' className='gleamPhoto' src='./images/Gleam-Photo.webp' />
                </div>
            </div>
            <div className='gleamContentExtraInfoContainer'>
                <h2>Notları Yönetmenin Yeni Yolu: Gleam ile Sürecinizi İzleyin!</h2>
                <div className='gleamContentExtraInfoBody'>
                    {gleamInfo.map((item, i) => (
                        <div className='gleamContentExtraInfoCard'>
                            <h4>{item.title}</h4>
                            <p>{item.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default HomePageContentComp;