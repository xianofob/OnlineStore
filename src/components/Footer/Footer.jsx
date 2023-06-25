import { Footer } from 'flowbite-react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import AdbIcon from '@mui/icons-material/Adb';

export default function FooterWithSocialMediaIcons() {
  return (
    <Footer container className="footer-background-color mb-20">
      <div className="w-full h-full">
        <div className="fixed grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            {/* <Footer.Brand
              alt="App Logo"
              href="https://flowbite.com"
              name="Flowbite"
              src="https://flowbite.com/docs/images/logo.svg"
                bgDark="true"
            /> */}
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div className="mt-5">
              {/* <Footer.Title title="about" className='text-white' /> */}
              <Footer.LinkGroup col>
                <Footer.Link href="#" className='text-white'>
                  Flowbite
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="mt-5">
              {/* <Footer.Title title="Legal" className='text-white' /> */}
              <Footer.LinkGroup col>
                <Footer.Link href="#" className='text-white'>
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#" className='text-white'>
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="App™"
            // href="#"
            year={2023}
            className='text-white'
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
              className='text-white'
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
              className='text-white'
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
              className='text-white'
            />
          </div>
        </div>
      </div>
    </Footer>
  )
}


