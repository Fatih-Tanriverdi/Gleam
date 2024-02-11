import { Button } from '@mui/material';
import '../../scss/styles.scss';
import { ArrowCircleRightOutlined, Login, PersonAddAlt1 } from '@mui/icons-material';

type Props = {}

export default function Home({ }: Props) {
    return (
        <div className='gleamHomePageContainer'>
            <div className='gleamNavbarContainer'>
                <div className='gleamNavbarContainerLeft'>
                    <img alt='gleamLogo' className='gleamLogo' src='./images/GleamLogo.png' />
                    <h2>Gleam</h2>
                    <div className='gleamNavbarContainerMenu'>
                        <ul>
                            <li>Anasayfa</li>
                            <li>Hizmetler</li>
                            <li>Hakkımızda</li>
                        </ul>
                    </div>
                </div>
                <div className='gleamNavbarContainerRight'>
                    <Button className='loginButton'>
                        <Login />
                    </Button>
                    <Button className='registerButton'>
                        <PersonAddAlt1 />
                    </Button>
                </div>
            </div>
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
            <div className='gleamFooterContainer'>
                <div className='gleamFooterTop'>
                    <div className='gleamFooterTopInfoCard'>
                        <h4>Gleam Hakkında</h4>
                        <p>Panoların ardında ne var ?</p>
                    </div>
                    <div className='gleamFooterTopInfoCard'>
                        <h4>Uygulamalar</h4>
                        <p>Masaüstü veya Mobil cihazlarınız için Gleam uygulamasını indirin.</p>
                    </div>
                    <div className='gleamFooterTopInfoCard'>
                        <h4>Bize Ulaşın</h4>
                        <p>Yardıma mı ihtiyacınız var ? Bizimle iletişime geçin, size yardımcı olalım.</p>
                    </div>
                </div>
                <div className='gleamFooterBottom'>
                    <div className='gleamFooterBottomLogo'>
                        <img alt='gleamLogoFooter' className='gleamLogoFooter' src='./images/GleamLogo.png' />
                        <h6>Gleam</h6>
                    </div>
                    <h5>© Copyright - 2024 </h5>
                </div>
            </div>
        </div>
    )
}