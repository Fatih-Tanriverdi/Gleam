import '../../scss/styles.scss';
import { Button } from '@mui/material';
import { Login, PersonAddAlt1 } from '@mui/icons-material';
import ScroolButton from '../../components/scroolButton/ScroolButton';
import HomePageContentComp from '../../components/home/HomePageContentComp';

type Props = {}

const Home = (props: Props) => {

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
                            <li>İletişim</li>
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
            <HomePageContentComp />
            <div className='gleamFooterContainer'>
                <div className='gleamFooterTop'>
                    <div className='gleamFooterTopInfoCard'>
                        <h4>Gleam Hakkında</h4>
                        <p>Gleam, notlarınızı anında organize eder, süreçlerinizi yönetir.</p>
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
            <ScroolButton />
        </div>
    )
}

export default Home;